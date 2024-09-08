import { AppContainer } from "@/shared/ui/app-container/ui/app-container"
import cls from './StackingSection.module.scss'
import { AppText } from "@/shared/ui/app-text"
import { Button } from "@/shared/ui/button"

export const StackingSection = () => {
    return (
        <AppContainer className={cls.stacking}>
            <div className={cls.stackingWrapper}>
                <AppText text={'Стейкинг в 1 клик'} fontSize={48} lineHeight={64} />
                <AppText text={'Стейкинг UMI на смарт-контракте позволяет каждому добывать новые монеты без майнинг-оборудования, пулов или особых условий — быстро и просто.\n\n Дозированный вывод из стейкинга защищает от переизбытка монет на рынке, позволяя получать высокую награду каждый месяц и использовать её в огромной экосистеме здесь и сейчас.'} />
                <div>
                    <Button text={'Стейкинг'} size="large" />
                </div>
            </div>
        </AppContainer>
    )
}