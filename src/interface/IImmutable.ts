/**
 * Immutable fromJS 를 통해 선언될 경우, any 이기에 임시로 선언,
 */
export interface IImmutable {
  deleteIn: (...args) => this;
  get: (...args) => this;
  getIn: (...args) => this;
  merge: (...args) => this;
  set: (...args) => this;
  setIn: (...args) => this;
  update: (...args) => this;
  toJS<E>(): E;
}

export interface IImmutablePreset<T> {
  deleteIn: (...args) => this;
  get: (...args) => this;
  getIn: (...args) => this;
  merge: (...args) => this;
  set: (...args) => this;
  setIn: (...args) => this;
  update: (...args) => this;
  toJS(): T;
}
