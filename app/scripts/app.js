// Start with your ES5/6/7 script here.
// Import other files or use Browserify require statements.
import Chart from './chart';
import './color_generator';
import MapView from './views/map_view';
import './notifier';
import ParamsController from './params_controller';
import SensorThings from './sensor_things/sensor_things';
import Settings from './settings';
import SettingsView from './views/settings_view';
import ThingView from './views/thing_view';
import './transform_observations';

window.App = {
  Views: {
    MapView:      MapView,
    SettingsView: SettingsView,
    ThingView:    ThingView
  }
};

window.Chart = Chart;
window.Settings = new Settings();
window.ParamsController = new ParamsController({ settings: window.Settings });
window.SensorThings = SensorThings;
