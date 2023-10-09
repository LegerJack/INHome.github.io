import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DeviceListComponent extends Component {
    @action
    showDeviceName(deviceName) {
        alert(`Выбран товар - ${deviceName}`);
    }
}
