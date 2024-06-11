export function formatcurrency(pricecents){
    return (Math.round(pricecents) /100).toFixed(2);
}
export default formatcurrency;