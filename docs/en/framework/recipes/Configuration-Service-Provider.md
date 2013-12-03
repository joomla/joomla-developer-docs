# A Recipe for a Configuration Service Provider

Following is an example of a configuration service provider that would load a JSON format configuration file from a
specified location.

```php
<?php
namespace Acme\Providers;

use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Registry\Registry;

/**
 * Registers the Configuration service provider.
 *
 * @since  1.0
 */
class ConfigServiceProvider implements ServiceProviderInterface
{
	/**
	 * @var    string
	 * @since  1.0
	 */
	private $path;

	/**
	 * Class constructor.
	 *
	 * @param   string  $path  The full path and file name for the configuration file.
	 *
	 * @since   1.0
	 */
	public function __construct($path)
	{
		$this->path = $path;
	}

	/**
	 * Gets a configuration object.
	 *
	 * @param   Container  $c  A DI container.
	 *
	 * @return  Registry
	 *
	 * @since   2.0
	 * @throws  \LogicException if the configuration file does not exist.
	 * @throws  \UnexpectedValueException if the configuration file could not be parsed.
	 */
	public function getConfig(Container $c)
	{
		if (!file_exists($this->path))
		{
			throw new \LogicException('Configuration file does not exist.', 500);
		}

		/** @var \Joomla\Input\Input $input */
		$input = $c->get('input');

		$json = json_decode(file_get_contents($this->path));

		if (null === $json)
		{
			throw new \UnexpectedValueException('Configuration file could not be parsed.', 500);
		}

		$temp = new Registry($json);
		$profile = $input->get('profile');

		if ($temp->get('profiles.' . $profile))
		{
			$config = new Registry($temp->get('profiles.' . $profile));
		}
		else
		{
			$config = new Registry($temp->get('profiles.default'));
		}

		// Automatically set the path for `/etc/`.
		$config->set('path.etc', dirname($this->path));

		return $config;
	}

	/**
	 * Registers the service provider within a DI container.
	 *
	 * @param   Container  $container  The DI container.
	 *
	 * @return  void
	 *
	 * @since   1.0
	 */
	public function register(Container $container)
	{
		$that = $this;
		$container->share(
			'config',
			function ($c) use ($that)
			{
				return $that->getConfig($c);
			}
			, true
		);
	}
}
```

To implement this, create a container in the application's `initialise` method. This snippet assumes that you
have defined a constant called `ACME_CONFIG`, probably in the entry-point file that instantiates this application,
that points to the location of the configuration file.

```php
namespace Acme;

use Joomla\Application\AbstractApplication;

class Application extends AbstractApplication
{
	/**
	 * Custom initialisation method.
	 *
	 * Called at the end of the AbstractCliApplication::__construct method. This is for developers to inject
	 * initialisation code for their application classes.
	 *
	 * @return  void
	 *
	 * @codeCoverageIgnore
	 * @since   1.0
	 */
	protected function initialise()
	{
		// New DI stuff!
		$container = new Container;

		$container->registerServiceProvider(new Providers\ConfigServiceProvider(ACME_CONFIG));

		$this->container = $container;
	}
}
```

