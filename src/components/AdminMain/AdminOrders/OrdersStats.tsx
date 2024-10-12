import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from "../AdminMain.module.sass";
import ordersStyle from './AdminOrders.module.sass';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {filterOptions, intervalOptions} from "../Options";
import {IOptions} from "../../../interface/IAdminPageComponets";

const OrdersStats: React.FC<{ query: { num: number, interval: string }, setQuery: Function }> = ({
                                                                                                     query,
                                                                                                     setQuery
                                                                                                 }) => {
    const {ordersStats} = useAppSelector(state => state.orderReducer)
    const [intervalOptionVisibility, setIntervalOptionVisibility] = useState<IOptions>({display: 'none', open: false})

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery({...query, [e.target.name]: e.target.value})
        setIntervalOptionVisibility({...intervalOptionVisibility, display: 'none', open: false})
    }

    return (
        <section id={'ordersStatistics'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Статистика по заказам</h3>
            {ordersStats && (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={ordersStats}>
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line name={'Количество заказов'} type="monotone" dataKey="count" stroke="#2C3E50"/>
                    </LineChart>
                </ResponsiveContainer>)}
            <div className={ordersStyle.chartInputs__container}>
                <div className={ordersStyle.chartInputs__items}>
                    <div className={styles.form__inputContainer_label} style={{marginRight: '1rem'}}>Интервал</div>
                    <div className={styles.form__selectContainer}
                         onClick={() => intervalOptionVisibility.open
                             ? setIntervalOptionVisibility({...intervalOptionVisibility, display: 'none', open: false})
                             : setIntervalOptionVisibility({...intervalOptionVisibility, display: 'flex', open: true})
                         }>
                        {intervalOptions.map(el => (el.id === query.interval ? el.name : ''))}
                    </div>
                    <div className={styles.form__optionsContainer}
                         style={{bottom: '-13.2rem', display: intervalOptionVisibility.display}}>
                        {intervalOptions.map(option => (
                            <label key={option.id} htmlFor={option.id}
                                   className={option.id === query.interval
                                       ? [styles.form__option, styles.selectedOption].join(' ')
                                       : [styles.form__option].join(' ')}>{option.name}
                                <input type="radio"
                                       value={option.id}
                                       name="interval"
                                       id={option.id}
                                       onChange={e => onChangeHandler(e)}
                                />
                            </label>
                        ))}
                    </div>
                </div>
                <div className={ordersStyle.chartInputs__items}>
                    <label htmlFor="num" style={{marginRight: '1rem'}}>Период</label>
                    <input type="number" name="num" id="num" min={1} value={query.num}
                           onChange={e => setQuery({...query, [e.target.name]: parseInt(e.target.value)})}/>
                </div>
            </div>
        </section>
    );
};

export default OrdersStats;
