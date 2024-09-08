import { AppContainer } from "@/shared/ui/app-container/ui/app-container";
import { AppText } from "@/shared/ui/app-text";
import { Button } from "@/shared/ui/button";
import coins from '@/shared/assets/icons/coins.svg'
import flame from '@/shared/assets/icons/flame.svg'
import airdrop from '@/shared/assets/icons/airdrop.svg'
import money from '@/shared/assets/icons/money.svg'
import cls from './TokenomicSection.module.scss'

export const TokenomicSection = () => {
    return (
        <AppContainer className={cls.tokenomic}>
            <div className={cls.tokenomicInfo}>
                <AppText fontSize={48} lineHeight={64} text={'Токеномика: умная,\n\n децентрализованная,\n справедливая'} />
                <div>
                    <Button text={'Токеномика'} size="large" />
                </div>
            </div>
            <div className={cls.tokenomicCards}>
                <div className={cls.firstRow}>
                    <div className={cls.tokenomicCard}>
                        <img src={coins} />
                        <AppText text={'Никакого премайна для разработчиков'} />
                    </div>
                    <div className={cls.tokenomicCard}>
                        <img src={flame} />
                        <AppText text={'Ежемесячное сжигание невостребованных монет'} />
                    </div>
                </div>
                <div className={cls.secondRow}>
                    <div className={cls.tokenomicCard}>
                        <img src={airdrop} />
                        <AppText text={'100% первичной эмиссии — это Airdrop для пользователей'} />
                    </div>
                    <div className={cls.tokenomicCard}>
                        <img src={money} />
                        <AppText text={'Дозированный вывод из стейкинга'} />    
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}