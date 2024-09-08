import { AppContainer } from "@/shared/ui/app-container/ui/app-container";
import { AppText } from "@/shared/ui/app-text";
import { Button } from "@/shared/ui/button";
import cls from './MissionSection.module.scss'

export const MissionSection = () => {
    return (
        <AppContainer className={cls.mission}>
            <div className={cls.missionWrapper}>
                <AppText text={'Миссия UMI'} fontSize={48} lineHeight={64} />
                <AppText text={'Наша миссия — создать монету для реального целевого использования, интегрированную в реальные сектора экономики.  Без спекуляций, манипуляций с курсом обмена и влияния «китов» на рынок. Монета UMI — полезна и выгодна для каждого пользователя в отдельности и всего сообщества в целом. '} />
                <div>
                    <Button text={'Миссия'} size="large" />
                </div>
            </div>
        </AppContainer>
    )
}