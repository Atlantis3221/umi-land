import { AppText } from "@/shared/ui/app-text";
import { AppContainer } from "@/shared/ui/app-container/ui/app-container";
import cls from './BurnSection.module.scss'
import { Button } from "@/shared/ui/button";

export const BurnSection = () => {
    return (
        <AppContainer>
            <div className={cls.burn}>
            <div className={cls.burnWrapper}>
                <AppText text={'Ежемесячное сжигание'} fontSize={48} lineHeight={64} />
                <AppText text={'Впервые в истории мы создали систему автоматического сжигания невостребованных монет прямо в блокчейне. Все UMI, которые не используются в экосистеме или стейкинге — автоматически сгорают каждый месяц с целью защиты от спекуляций на рынке и переизбытка монет. '} />
                <div>
                    <Button size="large" text={'Сжигание'} />
                </div>
            </div>
            </div>
        </AppContainer>
    )
}