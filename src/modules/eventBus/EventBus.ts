class EventBus {
  public listeners: any;
  constructor() {
    this.listeners = [];
  }

  public on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: any) => listener !== callback
    );
  }

  public emit(event: string, ...args: any): void {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: any) => {
      listener(...args);
    });
  }
}

export default EventBus;
