import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loadOrderStats} from "../../../store/actions/orderAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";

const OrdersStats = () => {
    const auth = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()



    useEffect( () => {
      if(auth.access) dispatch(loadOrderStats(decodeToken(auth.access)))
    }, [auth.access]);


    return (
        <div>

        </div>
    );
};

export default OrdersStats;
