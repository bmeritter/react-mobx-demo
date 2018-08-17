import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';


@inject('store', 'actions')
@observer
class Demo extends Component {
 render() {
     const { store, actions} = this.props;
     return (
         <div>
             <div>{store.a}</div>
             <div>
                 <button onClick={actions.incA}>增加 </button>
                 <button onClick={actions.desA}>减少 </button>
             </div>
             <div>
                 <button onClick={actions.reset}>重置 </button>
             </div>
         </div>
     )
 }
}

export default Demo;