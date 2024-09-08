import { AppContainer } from "@/shared/ui/app-container/ui/app-container";
import { AppText } from "@/shared/ui/app-text";
import { Button } from "@/shared/ui/button";
import whitepaper from '@/shared/assets/about_whitepaper.png'
import brand from '@/shared/assets/about_brand.png'
import graph from '@/shared/assets/about_graph.png'
import cls from './allAboutSection.module.scss'

export const AllAboutSection = () => {
    return (
        <AppContainer className={cls.allAbout}>
            <div className={cls.aboutCard}>
                <div className={cls.whitepaperBlock}>
                    <div className={cls.whitepaperBlockCard}>
                        <img src={whitepaper} />
                        <Button theme="round" className={cls.button} />
                    </div>
                    <AppText text={'Ознакомиться с WhitePaper UMI'} fontSize={25} lineHeight={34} />
                    <AppText text={'Концепция, технология, цели и особенности монеты и блокчейна UMI'} fontSize={15} lineHeight={22} />                </div>
            </div>
            <div className={cls.aboutCard}>
                <div className={cls.whitepaperBlock}>
                    <div className={cls.whitepaperBlockCard}>
                        <img src={brand} />
                        <Button theme="round" className={cls.button} />
                    </div>
                    <AppText text={'Ознакомиться с WhitePaper UMI'} fontSize={25} lineHeight={34} />
                    <AppText text={'Концепция, технология, цели и особенности монеты и блокчейна UMI'} fontSize={15} lineHeight={22} />                </div>
            </div>

            <div className={cls.graphBlock}>
                <div className={cls.graphCard}>
                    <img src={graph} />
                    <div className={cls.graphCardInfo}>
                        <AppText text={'Купить или продать UMI'} fontSize={25} lineHeight={34} />
                        <AppText text={'С лёгкостью продавайте и покупайте криптовалюту UMI на бирже SIGEN'} />
                        <div>
                            <Button text={'Перейти'} size="large" />
                        </div>
                    </div>
                </div>

                <div className={cls.instructionCard}>
                    <AppText text={'Ознакомиться с инструкциями'} fontSize={25} lineHeight={34} />
                    <div>
                        <Button text={'Перейти'} size="large" />
                    </div>

                </div>

            </div>


        </AppContainer>
    )
}