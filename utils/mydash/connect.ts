import store, {StoreEvents} from '../store/store';
import Block from '../../src/modules/block/Block';

type Indexed = Record<string, any>;

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: {}) {
        let state = mapStateToProps(store.getState());

        super({...props, ...state}, '');

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());
          this.setProps({...newState});
          state = newState;
        });
      }
    };
  };
}
