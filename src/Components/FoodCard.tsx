import React from 'react';

export default function FoodCard(props: any) {
    let [hovered, setHovered] = React.useState(false);
    const choosedAndAvailable = props.choosed && props.available;
    const annotaionText = hovered && choosedAndAvailable ? 'Котэ не одобряет?' : 'Сказочное заморское яство';

    //@ts-ignore
    const [_portions, portionsCount, portionsText] = props.portions.match(/^(\d*)(.*)/);
    const [_gift, giftCount, giftText] = props.giftMouses.match(/^(\d*)(.*)/);
    let attractText =
        !props.available
            ? `Печалька c ${props.foodWith} закончилось.`
            : choosedAndAvailable
                ? props.choosedText
                : <span>Чего сидишь? Порадуй котэ, <span className='food-card__buy' onClick={props.changeFoodChoosedState}>купи</span><span className='food-card__dott'>.</span></span>;

    return (
        <div className='food-card'>
            <div
                className={`food-card__content ${choosedAndAvailable && 'food-card__content_choosed'} ${!props.available && 'food-card__content_disabled'}`}
                onClick={props.changeFoodChoosedState}
                onMouseEnter={() => props.choosed && setHovered(true)} onMouseLeave={() => setHovered(false)}
            >
                <div className={`food-card__annotation ${choosedAndAvailable && 'food-card__annotation-cancellation'}`}>{annotaionText}</div>
                <div className='food-card__title'>Нямушка</div>
                <div className='food-card__food-with'>с {props.foodWith}</div>
                <div className='food-card__info'><span className='bold'>{portionsCount}</span>{portionsText}</div>
                <div className='food-card__info'><span className='bold'>{giftCount}</span>{giftText}</div>
                {props.happyCustomer && <div className='food-card__info'>{props.happyCustomer}</div>}
                <div className={`food-card__weight weight ${choosedAndAvailable && 'weight_choosed'} ${!props.available && 'weight_disabled'}`}>
                    <div className='weight__count'>{props.weight}</div>
                    <div className='weight__unit'>кг</div>
                </div>
                <img src='/Images/kitty.png' alt="котэ" />
            </div>
            <div className={`food-card__attract ${!props.available && 'food-card__attract_disabled'}`}>{attractText}</div>
        </div>
    )
}