import { React, Component } from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <div>
                            <CollectionPreview key={`${id}-preview`} {...otherCollectionProps} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;