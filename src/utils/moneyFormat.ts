// 1000000 -> 1,000,000

const moneyFormat = (money: number, sign = false): string => {
    try {
        const signTemp = money > 0 ? '+' : money < 0 ? '-' : '';
        let str = '';

        for (const [i, v] of money.toString().replace('-', '').split('').reverse().entries()) {
            if (i > 0 && i % 3 === 0) str += ',';

            str += v;
        }

        if (sign || money < 0) str += signTemp;

        return str.split('').reverse().join('');
    } catch (error) {
        console.log(error);

        return money.toString();
    }
};

export default moneyFormat;