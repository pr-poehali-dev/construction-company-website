import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Home',
      title: 'Жилое строительство',
      description: 'Строительство частных домов, коттеджей и многоквартирных домов под ключ'
    },
    {
      icon: 'Building',
      title: 'Коммерческое строительство',
      description: 'Офисные центры, торговые комплексы, производственные помещения'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт и реконструкция',
      description: 'Капитальный ремонт, реконструкция зданий, модернизация инфраструктуры'
    },
    {
      icon: 'Truck',
      title: 'Инфраструктурные проекты',
      description: 'Дороги, мосты, коммунальные сети, благоустройство территорий'
    }
  ];

  const projects = [
    {
      title: 'Жилой комплекс "Солнечный"',
      description: '120 квартир, современная архитектура',
      area: '15,000 м²',
      year: '2024',
      image: 'img/154f43cd-9f26-4981-909c-50ac115e858e.jpg'
    },
    {
      title: 'Торговый центр "Галерея"',
      description: 'Многофункциональный комплекс в центре города',
      area: '8,500 м²',
      year: '2023',
      image: 'img/00c0b6cc-0281-43c5-b3b0-2c5511d09737.jpg'
    },
    {
      title: 'Офисный комплекс "Бизнес Парк"',
      description: 'Класса А+ с подземным паркингом',
      area: '12,000 м²',
      year: '2023',
      image: 'img/5ea2a9f1-fe13-47ea-af90-d705841fdc37.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      company: 'ООО "Инвест Строй"',
      text: 'Отличная работа! Проект выполнен в срок и с высоким качеством. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Марина Сидорова',
      company: 'Частный заказчик',
      text: 'Построили дом мечты! Профессиональная команда, честные цены, никаких скрытых доплат.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      company: 'ЗАО "Развитие"',
      text: 'Сотрудничаем уже 3 года. Всегда качественно и в срок. Настоящие профессионалы своего дела.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-secondary">
              СтройТех<span className="text-primary">Про</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-secondary via-secondary to-primary min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Строим
                <span className="block text-accent">будущее</span>
                вместе
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Профессиональные строительные услуги с 15-летним опытом. 
                От проектирования до сдачи объекта под ключ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать проект
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="lg:pl-8 animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-2xl font-bold mb-6">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'Award', text: '15 лет опыта', desc: 'Более 200 успешных проектов' },
                    { icon: 'Shield', text: 'Гарантия качества', desc: '5 лет гарантии на все работы' },
                    { icon: 'Clock', text: 'Соблюдение сроков', desc: '98% проектов сданы вовремя' },
                    { icon: 'Users', text: 'Команда профи', desc: 'Сертифицированные специалисты' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg">
                        <Icon name={item.icon as any} size={20} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{item.text}</div>
                        <div className="text-white/70 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-secondary mb-4">О компании СтройТехПро</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — команда профессионалов с многолетним опытом в строительной индустрии, 
              готовая воплотить в жизнь проекты любой сложности
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                number: '200+',
                title: 'Завершенных проектов',
                description: 'За 15 лет работы мы реализовали более 200 проектов различной сложности'
              },
              {
                number: '50+',
                title: 'Специалистов в команде',
                description: 'Опытные инженеры, архитекторы и строители с высшим образованием'
              },
              {
                number: '5',
                title: 'Лет гарантии',
                description: 'Мы уверены в качестве наших работ и предоставляем расширенную гарантию'
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-primary mb-4">{stat.number}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр строительных услуг от проектирования до сдачи объекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши проекты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Примеры успешно реализованных проектов разного масштаба
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{project.year}</div>
                    <div className="font-medium">{project.area}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-secondary">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Мы всегда на связи
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>
              <div className="space-y-6">
                {[
                  { icon: 'Phone', title: 'Телефон', info: '+7 (495) 123-45-67' },
                  { icon: 'Mail', title: 'Email', info: 'info@stroytechpro.ru' },
                  { icon: 'MapPin', title: 'Адрес', info: 'Москва, ул. Строительная, д. 15' },
                  { icon: 'Clock', title: 'Режим работы', info: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg mt-1">
                      <Icon name={contact.icon as any} size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{contact.title}</div>
                      <div className="text-white/80">{contact.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Описание проекта"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-2xl mb-4">
                СтройТех<span className="text-primary">Про</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональные строительные услуги с гарантией качества и соблюдением сроков.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Жилое строительство</li>
                <li>Коммерческое строительство</li>
                <li>Ремонт и реконструкция</li>
                <li>Инфраструктурные проекты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Наши проекты</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@stroytechpro.ru</div>
                <div>Москва, ул. Строительная, д. 15</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройТехПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;