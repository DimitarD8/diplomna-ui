import { Component } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';

@Component({
  selector: 'app-doctoral-information',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './doctoral-information.component.html',
  styleUrl: './doctoral-information.component.css'
})
export class DoctoralInformationComponent {
  title = 'МОБИЛНОСТ НА ДОКТОРАНТИ';
  content = [
    'Всички обучаващи се в ОНС „доктор“ и наскоро завършилите докторантурата си лица (до 12 месеца след датата на дипломиране) могат да предприемат краткосрочни или дългосрочни периоди на мобилност за обучение или практика в чужбина. Докторантите могат да реализират мобилност само в партньорско висше училище по Еразъм харта, или в легитимно партньорско висше училище от партнираща на програма „Еразъм+“ държава, с което ТУ – София, има сключен междуинституционален договор за обмен на докторанти.',
    'Продължителността на мобилността на докторанти може да бъде: <ul><li>Краткосрочна: от 5 до 30 дни;</li><li>Дългосрочна: от 2 до 12 месеца.</li></ul>',
    'Общата продължителност на периодите на мобилност, в които участва един докторант, не може да превишава 12 месеца физическа мобилност максимум за периода на обучението в ОНС „доктор“, независимо от броя и вида на дейностите за мобилност.',
    'Критериите за допустимост, подбора на участниците и стъпките за подготовка и отчитане на мобилността на докторанти са аналогични на тези за студентска мобилност с цел обучение и студентска мобилност с цел практика. Критерият за минимален среден успех от следването до момента „Добър 4.00“ се зачита с оценката от докторантския минимум или успехът от други положени изпити, включени в индивидуалния план на докторанта. При неположени до момента изпити кандидатстващият докторант прилага списък с научни публикации, участие в конференции и други научни форуми.',
    'Финансиране: 70 евро на ден от 1 до 14 ден, 50 евро на ден от 15 до 30 ден. 50 евро подпомагане за екологичен транспорт, само при използване на влак, автобус или споделена кола (повече от един финансиран участник, който ползва колата)',
    'С цел дългосрочна мобилност могат да кандидатстват и дипломирани докторанти при условие, че са били селектирани от висшeто училище, в което са следвали през последната година от обучението си преди завършването си и да реализират практиката си до една година след завършването си.',
    'При краткосрочните докторантски мобилности участниците имат право на финансова подкрепа за пътуване от програмата. Размерът на пътните разходи се изчислява с помощта на поддържания от Европейската комисия калкулатор за разстоянията. Подкрепата за пътуване се определя съгласно транспортното разстояние в едната посока. При дългосрочните докторантски мобилности участниците не получават финансова подкрепа за пътуване, но в случай че изберат екологично пътуване, те ще получат еднократно средства в размер на 50 евро като допълнителна сума към индивидуалния Еразъм грант.'
  ];
}
