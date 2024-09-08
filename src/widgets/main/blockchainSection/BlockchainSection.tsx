import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import cls from './BlockchainSection.module.scss'
import { AppText } from '@/shared/ui/app-text'
import { Button } from '@/shared/ui/button'

export const BlockchainSection = () => {
    return (
        <AppContainer>
            <div className={cls.blockchainSection}>
                <div className={cls.cards}>
                    <div className={cls.card}>
                        <AppText className={cls.title} text={'1-я'} fontSize={28} lineHeight={28} />
                        <AppText text={'Блокчейн-сеть, которая показала такую высокую пропускную способность'} fontSize={14} lineHeight={20} />
                    </div>
                    <div className={cls.card} style={{ gridRow: '2', gridColumn: '2' }}>
                        <AppText className={cls.title} text={'65 535'} fontSize={28} lineHeight={28} />
                        <AppText text={'Транзакций в секунду транзакций в секунду без комиссий'} fontSize={14} lineHeight={20} />
                    </div>
                </div>
                <div className={cls.info}>
                    <div className={cls.text}>
                        <div>
                            <AppText fontSize={48} lineHeight={64} text={'Мгновенно. Безопасно.'} />
                            <AppText fontSize={48} lineHeight={64} text={'Без комиссий'} />
                        </div>
                        <AppText text={'Децентрализованный блокчейн UMI с пропускной способностью 65 535 транзакций в секунду, нулевыми комиссиями и открытым исходным кодом. Мы были первыми, кто доказал такую пропускную способность на практике в основной сети. '} />
                    </div>
                    <div className={cls.buttons}>
                        <Button size='large' text={'Технология'} />
                        <Button size='large' text={'Исходный код'} icon={false} theme='outline' />
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}