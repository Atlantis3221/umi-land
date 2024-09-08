import appStoreDownload from '@/shared/assets/appStore.svg'
import google from '@/shared/assets/google.svg'
import huawei from '@/shared/assets/huawei.svg'
import apk from '@/shared/assets/apk.svg'
import cls from './download.module.scss'

const list = [
    {
        link: '',
        img: appStoreDownload
    },
    {
        link: '',
        img: google
    },
    {
        link: '',
        img: huawei
    },
    {
        link: '',
        img: apk
    }
]

export const Download = () => {
    return (
        <div className={cls.download}>
            {list.map((item) => <img src={item.img} />)}
        </div> 
    )
}