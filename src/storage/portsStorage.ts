import {
  action, AnnotationMapEntry, makeObservable, observable,
} from 'mobx';

interface Port {
  id: string,
  info: any,
}

class PortsStorage {
  private pvPorts: Array<any> = [];

  constructor() {
    makeObservable(this, {
      pvPorts: observable,
      addPort: action,
      removePort: action,
    });
  }

  addPort(port: any): void {
    this.pvPorts.push(port);
  }

  removePort(): void {
    console.log(this.pvPorts);
  }

  get ports(): Array<any> {
    return this.pvPorts;
  }
}
