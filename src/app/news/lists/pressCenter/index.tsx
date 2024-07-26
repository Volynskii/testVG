import SectionBox from "@/components/boxes/section";
import styles from './pressCenter.module.scss';

const PressCenter = () => {
    return (
       <SectionBox>
           <div className={styles.background}/>
           <div className={styles.body}>

           <div>
               <h2>Пресс-центр ВГТРК</h2>
               <p>
                   5-я улица Ямского поля, д.22
                   <br/>
                   <a>press-centre@vgtrk.com</a>
               </p>
               <p>Пресс-центр ВГТРК расположен в центре Москвы,
                   рассчитан на 150 человек и оборудован по последнему
                   слову техники.</p>
               <p>В пресс-центре созданы уникальные возможности для проведения
                   любых мероприятий на самом высоком уровне — от пресс-конференций
                   до семинаров и презентаций, есть возможность трансляции
                   в прямом телевизионном эфире и в сети интернет с раздачей
                   сигнала иностранным телеканалам с синхронным переводом.</p>

           </div>



               <div>
                   <h2>Инфраструктура</h2>
                  <p>Оснащенный высокоскоростным беспроводным интернетом wi-ﬁ,
                      комфортабельный зал в стиле high-tech является по-настоящему
                      профессиональной площадкой для журналистов —
                      здесь предусмотрено все, вплоть
                      до возможности одновременной работы с четырьмя
                      независимыми радио-микрофонами. Весь записанный видеоматериал
                      выкладывается на FTP-сервер ВГТРК для дальнейшего
                      медийного использования.</p>

               </div>

               <div>
                   <h2>Техническая часть</h2>
                   <p>Лучшие камеры, осветительное, звуковое, инженерное телевизионное
                       оборудование вместе со специально разработанным режиссерским
                       решением по залу и расстановке камер позволяют организовывать
                       уникальные по качеству трансляции, соответствующие высоким стандартам,
                       выработанным на телеканале "Россия 24".</p>

               </div>



           </div>
       </SectionBox>
    );
};

export default PressCenter;