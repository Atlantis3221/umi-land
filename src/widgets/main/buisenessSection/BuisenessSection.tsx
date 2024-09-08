import cls from './BuisenessSection.module.scss'
import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import { AppText } from '@/shared/ui/app-text'
import { Button } from '@/shared/ui/button'
import walk from '@/shared/assets/walk.png'
import bot from '@/shared/assets/bot.png'
import legend from '@/shared/assets/legend.png'


export const BuisenessSection = () => {
    return (
        <AppContainer className={cls.buisenessSection}>
            <div className={cls.info}>
                <AppText text={'Бизнес и развлечения — это UMI'} fontSize={48} lineHeight={64} />
                <AppText text={'UMI — монета для целевого применения с огромной экосистемой GameFi-приложений, продуктов для бизнеса, творчества и жизни. Не завтра, а уже сейчас.'} />
                <div>
                    <Button text={'Экосистема'} size='large' className={cls.info__button} />
                </div>
            </div>
            <div className={cls.cards}>
                <div className={cls.card} style={{ background: '#ffffff' }}>
                    <div className={cls.cardInfo}>
                        <img src={walk} />
                        <AppText text={'UMI Walk'} theme='black' fontSize={28} lineHeight={30} />
                        <AppText text={'Гуляйте, будьте здоровее и получайте UMI'} theme='black' fontSize={15} lineHeight={20} />
                    </div>
                    <div className={cls.cardButton}>
                        <Button theme='round' />
                    </div>
                </div>
                <div className={cls.card} style={{ background: '#DFE2E7' }}>
                    <div className={cls.cardInfo}>
                        <img src={bot} />
                        <AppText text={'UMI Game Bot'} theme='black' fontSize={28} lineHeight={30} />
                        <AppText text={'Играйте в игры нашей разработки и получайте монеты UMI'} theme='black' fontSize={15} lineHeight={20} />
                    </div>
                    <div className={cls.cardButton}>
                        <Button theme='round' />
                    </div>
                </div>
                <div className={cls.card} style={{ background: '#57E426' }}>
                    <div className={cls.cardInfo}>
                        <img src={legend} />
                        <AppText text={'Legend Farm'} theme='black' fontSize={28} lineHeight={30} />
                        <AppText text={'Здесь будет краткое  описание UMI Legend'} theme='black' fontSize={15} lineHeight={20} />
                    </div>
                    <div className={cls.cardButton}>
                        <Button theme='round' />
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}