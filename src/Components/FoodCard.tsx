import { format } from 'path';
import React from 'react';

function portionsText(count: number): string {
    return ` порций`;
}
function giftMousesText(count: number): string {
    if (count === 1) return ` мышь в подарок`;
    if (2 <= count && count <= 4) return ` мыши в подарок`;
    return ` мышей в подарок`;
}

export default function FoodCard(props: dish & { changeFoodChoosedState: () => void }) {
    let [hovered, setHovered] = React.useState(false);
    const {foodWith, portions, giftMouses, happyCustomer, weight, available, choosed, choosedText, changeFoodChoosedState} = props;
    const choosedAndAvailable = choosed && available;
    const annotaionText = hovered && choosedAndAvailable ? 'Котэ не одобряет?' : 'Сказочное заморское яство';

    let attractText =
        !available
            ? `Печалька c ${foodWith} закончилось.`
            : choosedAndAvailable
                ? choosedText
                : <span>Чего сидишь? Порадуй котэ, <span className='food-card__buy' onClick={changeFoodChoosedState}>купи</span><span className='food-card__dott'>.</span></span>;

    return (
        <div className='food-card'>
            <div
                className={`food-card__content ${choosedAndAvailable && 'food-card__content_choosed'} ${!available && 'food-card__content_disabled'}`}
                onClick={changeFoodChoosedState}
                onMouseEnter={() => choosed && setHovered(true)} onMouseLeave={() => setHovered(false)}
            >
                <div className={`food-card__annotation ${choosedAndAvailable && 'food-card__annotation-cancellation'}`}>{annotaionText}</div>
                <div className='food-card__title'>Нямушка</div>
                <div className='food-card__food-with'>с {foodWith}</div>
                <div className='food-card__info'><span className='bold'>{portions}</span>{portionsText(portions)}</div>
                <div className='food-card__info'><span className='bold'>{giftMouses}</span>{giftMousesText(giftMouses)}</div>
                {happyCustomer && <div className='food-card__info'>заказчик доволен</div>}
                <div className={`food-card__weight weight ${choosedAndAvailable && 'weight_choosed'} ${!available && 'weight_disabled'}`}>
                    <div className='weight__count'>{Intl.NumberFormat('ru-RU').format(weight)}</div>
                    <div className='weight__unit'>кг</div>
                </div>
                <img src={require('../Images/kitty.png')} alt="котэ" />
            </div>
            <div className={`food-card__attract ${!available && 'food-card__attract_disabled'}`}>{attractText}</div>
        </div>
    )
}