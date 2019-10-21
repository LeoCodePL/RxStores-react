import React from 'react';
import { Provider, StoreClass } from '@leocode/rxstores';
import { Store, StoreModel } from '@leocode/rxstores/lib/store';

export function useStore<T extends Store>(
    storeImplementation: StoreClass<T>,
    context?: string,
) {

    const [data, setData] = React.useState<StoreModel<T>>();
    const [{ methods }, setStore] = React.useState<T>(null as any);

    React.useEffect(() => {
        const store = context 
        ? Provider.from(context).getStore(storeImplementation) 
        : Provider.getStore(storeImplementation);

        setStore(store);
        const subscription = store.data.subscribe(setData)
        return () => subscription.unsubscribe();
    }, [])

    return {
        data,
        methods
    }
}
