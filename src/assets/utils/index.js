import router from '@/router';
import jDate from 'jalali-date'
export const mailValidate = (e) => {
    // const { t } = useI18n()
    if (!e) {
        console.log(e)
    } else {
        const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        console.log(valid)
        return valid
    }
}
export const phoneValidate = (e) => {
    // const { t } = useI18n()
    if (!e) {
        return false
    } else {
        const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        return valid
    }
}
export const passwordValidate = (e) => {
    if (!e) {
        return false
    } else {
        const valid = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test((e))
        console.log(valid)
        return valid
    }
}
export const errorShower = (e,i) => {
    if (e.length>0) {
       return  e.filter((item)=>item?.id===i)[0]?.title
    }

}
export const currency = (e, currency = 'USD') => {
    switch (currency) {
        case 'USD':
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'}).format(e)
        case 'IRR':
            return new Intl.NumberFormat('en-IR', { style: 'decimal', signDisplay: 'auto', currencyDisplay: 'symbol' }).format(e) + ' ريال'
    }
}
export const device = () => {
    if (window.innerWidth >= 1024) router.push('/')
    if (window.innerWidth <= 768 && window.innerWidth >= 425) router.push('/t')
    if (window.innerWidth >= 320 && window.innerWidth <= 425) router.push('/m')
}
export const toJalali = (e) => {
    const date = new jDate(new Date(e))
    return date.format('dddd DD MMMM YYYY') + `${new Date(e).getHours()}:${new Date(e).getMinutes()}:${new Date(e).getSeconds()}`
}
export class cookie{
     setCookie(name, value, exDay) {
        const d = new Date();
        d.setTime(d.getTime() + (exDay * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

     getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

     checkCookie(e) {
        let user = this.getCookie(e)
        if (user != "") {
            return true
        } else {
            return false
        }
    }

}
