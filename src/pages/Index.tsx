import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

function Index() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate] = useState(12.5);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(payment);
  };

  const newBuildings = [
    {
      name: 'РодинаПарк',
      district: 'Советский',
      class: 'Комфорт',
      priceFrom: '3.2 млн ₽',
      deadline: 'IV кв. 2025',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      features: ['Рядом с метро', 'Детские площадки', 'Подземный паркинг']
    },
    {
      name: 'Урбаника',
      district: 'Кировский',
      class: 'Бизнес',
      priceFrom: '4.5 млн ₽',
      deadline: 'II кв. 2026',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      features: ['Панорамное остекление', 'Консьерж', 'Фитнес-центр']
    },
    {
      name: 'Ривер',
      district: 'Дема',
      class: 'Комфорт+',
      priceFrom: '3.8 млн ₽',
      deadline: 'III кв. 2025',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
      features: ['Вид на реку', 'Закрытая территория', 'Коммерция на 1 этаже']
    },
    {
      name: 'Сердце Уфы',
      district: 'Октябрьский',
      class: 'Комфорт',
      priceFrom: '2.9 млн ₽',
      deadline: 'I кв. 2026',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop',
      features: ['Центр города', 'Развитая инфраструктура', 'Школа рядом']
    },
    {
      name: 'Зорге Премьер',
      district: 'Ленинский',
      class: 'Бизнес',
      priceFrom: '5.2 млн ₽',
      deadline: 'IV кв. 2025',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      features: ['Премиум-класс', 'Умный дом', 'SPA-зона']
    },
    {
      name: 'The Prime',
      district: 'Орджоникидзевский',
      class: 'Элит',
      priceFrom: '6.8 млн ₽',
      deadline: 'II кв. 2027',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      features: ['Элитный комплекс', 'Видовые квартиры', 'Консьерж 24/7']
    }
  ];

  const testimonials = [
    {
      name: 'Анна М.',
      text: 'Вера помогла найти идеальную двушку в РодинаПарк за неделю! Провела через всю ипотеку, объяснила каждый шаг. Очень благодарна!',
      result: 'Куплена 2-комн. квартира, ипотека 11.9%'
    },
    {
      name: 'Дмитрий К.',
      text: 'Переживал за юридическую чистоту сделки. Вера организовала проверку всех документов, сопровождала до самого конца. Всё прошло идеально.',
      result: 'Безопасная покупка студии в новостройке'
    },
    {
      name: 'Елена и Сергей',
      text: 'Искали квартиру с видом на реку под маткапитал. Вера подобрала 5 вариантов за день, помогла с одобрением. Теперь живём в Ривере!',
      result: '3-комн. квартира с господдержкой'
    }
  ];

  const blogPosts = [
    {
      title: 'Как выбрать новостройку в Уфе в 2025 году',
      excerpt: 'Подробный чек-лист из 15 пунктов: на что обратить внимание при выборе застройщика, района и планировки.',
      date: '15 декабря 2024',
      readTime: '8 мин'
    },
    {
      title: 'Ипотека с господдержкой в Башкортостане: полный гид',
      excerpt: 'Актуальные условия семейной ипотеки, IT-ипотеки и льготных программ для жителей Уфы в 2025 году.',
      date: '10 декабря 2024',
      readTime: '12 мин'
    },
    {
      title: 'На что смотреть в договоре долевого участия (ДДУ)',
      excerpt: 'Юридические тонкости ДДУ: 7 пунктов, которые обязательно нужно проверить перед подписанием.',
      date: '5 декабря 2024',
      readTime: '6 мин'
    },
    {
      title: 'Плюсы и минусы покупки квартиры на котловане',
      excerpt: 'Стоит ли покупать квартиру на ранней стадии строительства? Разбираем все за и против с примерами из Уфы.',
      date: '1 декабря 2024',
      readTime: '10 мин'
    }
  ];

  const faqItems = [
    {
      question: 'Берёте ли вы комиссию с покупателя?',
      answer: 'Нет, моя работа оплачивается застройщиком. Для вас услуги подбора и сопровождения полностью бесплатны. Вы платите только стоимость квартиры.'
    },
    {
      question: 'Как проверить надёжность застройщика?',
      answer: 'Я проверяю репутацию застройщика, наличие разрешений на строительство, счета эскроу, отзывы жильцов других объектов. Предоставляю полный отчёт по каждому ЖК.'
    },
    {
      question: 'Можно ли купить квартиру с плохой кредитной историей?',
      answer: 'Да, работаю с ипотечным брокером, который специализируется на сложных случаях. Находим банки, готовые одобрить ипотеку даже при проблемах с КИ.'
    },
    {
      question: 'Сколько времени занимает подбор квартиры?',
      answer: 'В среднем 1-3 дня. После вашей заявки я подберу 3-5 подходящих вариантов уже на следующий день. Далее организую показы и помогу с выбором.'
    },
    {
      question: 'Помогаете ли с продажей старой квартиры?',
      answer: 'Да, помогаю продать вторичное жильё для переезда в новостройку. Оценка, фотосъёмка, размещение, показы, сопровождение сделки — полный цикл.'
    },
    {
      question: 'Что входит в юридическое сопровождение?',
      answer: 'Проверка договора долевого участия, анализ расчётов, проверка застройщика и объекта, консультации юриста на всех этапах до регистрации права собственности.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-accent" size={32} />
            <div>
              <h1 className="text-xl font-bold text-foreground">Недвижимость Уфы</h1>
              <p className="text-xs text-muted-foreground">Риэлтор по новостройкам</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#buildings" className="text-sm hover:text-accent transition-colors">Новостройки</a>
            <a href="#blog" className="text-sm hover:text-accent transition-colors">Блог</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://vk.com/realty_wera" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://t.me/bashnedvizh" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/30">
                Риэлтор по новостройкам в Уфе
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Помогаю стать владельцем новой квартиры в Уфе
              </h2>
              <p className="text-lg text-muted-foreground">
                С гарантией чистоты сделки и сопровождением юриста и ипотечного брокера
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="text-sm">Без комиссии</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="text-sm">Ипотека 11.9%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="text-sm">Подбор за 1 день</span>
                </div>
              </div>
              <Card className="border-accent/30 bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">Оставить заявку</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Как к вам обращаться?" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="messenger">Удобный мессенджер</Label>
                      <Input id="messenger" placeholder="WhatsApp, Telegram, VK" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Получить 3-5 вариантов квартир
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Новостройки Уфы"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Чем помогаю</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Независимый риэлтор в Уфе, специализация – первичный рынок недвижимости
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Search" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Подбор квартир</h3>
                <p className="text-muted-foreground">
                  Подбираю квартиры в новостройках Уфы и Уфимского района под ваш бюджет и цель. 
                  Без комиссии для покупателя.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Calculator" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Ипотека</h3>
                <p className="text-muted-foreground">
                  Расчёт платежа, подбор банка, сопровождение одобрения. 
                  Работаю совместно с ипотечным брокером.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Shield" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Юридическая защита</h3>
                <p className="text-muted-foreground">
                  Проверка договора долевого участия и всех расчётов. 
                  Сопровождение юриста на всех этапах сделки.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ипотека и юрсопровождение</h3>
                  <p className="text-muted-foreground mb-6">
                    Работаю в связке с опытным ипотечным брокером и юристом по недвижимости. 
                    При этом вы общаетесь только со мной — я координирую всех специалистов и 
                    контролирую процесс на каждом этапе.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Одно окно</p>
                        <p className="text-sm text-muted-foreground">Все вопросы решаются через меня</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Команда профессионалов</p>
                        <p className="text-sm text-muted-foreground">Брокер + юрист с опытом 7+ лет</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Полное сопровождение</p>
                        <p className="text-sm text-muted-foreground">От подбора до получения ключей</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon name="TrendingDown" className="text-accent" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">От 11.9%</p>
                          <p className="text-sm text-muted-foreground">Ставка по ипотеке</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon name="FileCheck" className="text-accent" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">100% проверка</p>
                          <p className="text-sm text-muted-foreground">Юридическая чистота</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon name="Users" className="text-accent" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">150+ семей</p>
                          <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему со мной</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Clock" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Экономия времени</h3>
                <p className="text-muted-foreground">
                  Подбираю готовые варианты за 1 день вместо недель самостоятельных поисков
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="ShieldCheck" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Безопасность</h3>
                <p className="text-muted-foreground">
                  Проверка застройщика, юридическое сопровождение, защита ваших интересов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Key" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Эксклюзивные предложения</h3>
                <p className="text-muted-foreground">
                  Доступ к закрытым продажам и ранним бронированиям у застройщиков
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Percent" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Выгодная ипотека</h3>
                <p className="text-muted-foreground">
                  Помощь в одобрении ипотеки от 11.9% даже в сложных случаях
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="buildings" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Новостройки Уфы</h2>
            <p className="text-muted-foreground">
              Актуальные жилые комплексы с проверенными застройщиками
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="comfort">Комфорт</TabsTrigger>
              <TabsTrigger value="business">Бизнес</TabsTrigger>
              <TabsTrigger value="elite">Элит</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newBuildings.map((building, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={building.image} 
                    alt={building.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    {building.class}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{building.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {building.district} район
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">От</p>
                      <p className="text-xl font-bold text-accent">{building.priceFrom}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Срок сдачи</p>
                      <p className="font-semibold">{building.deadline}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {building.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Подобрать квартиру
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ипотечный калькулятор</h2>
            <p className="text-muted-foreground">
              Рассчитайте примерный ежемесячный платёж по ипотеке
            </p>
          </div>

          <Card className="border-accent/30">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Стоимость квартиры</Label>
                    <span className="font-semibold text-accent">
                      {loanAmount.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={1000000}
                    max={15000000}
                    step={100000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 млн ₽</span>
                    <span>15 млн ₽</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Срок кредита</Label>
                    <span className="font-semibold text-accent">{loanTerm} лет</span>
                  </div>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={1}
                    max={30}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 год</span>
                    <span>30 лет</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                  <span className="text-muted-foreground">Процентная ставка</span>
                  <span className="text-2xl font-bold text-accent">{interestRate}%</span>
                </div>
              </div>

              <div className="border-t border-accent/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg">Ежемесячный платёж:</span>
                  <span className="text-3xl font-bold text-accent">
                    {calculateMonthlyPayment().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  * Расчёт примерный. Точные условия зависят от банка и вашей ситуации
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  Получить точный расчёт
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">
              Реальные истории людей, которые уже купили квартиры с моей помощью
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <Icon name="CheckCircle2" className="inline text-accent mr-1" size={14} />
                      {testimonial.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на самые популярные вопросы о покупке новостроек в Уфе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-accent/20 rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-muted-foreground">
              Экспертные материалы о покупке недвижимости в Уфе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-muted-foreground">
              Напишите в удобный мессенджер, чтобы получить подборку квартир
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="MessageCircle" className="text-accent" size={32} />
                </div>
                <h3 className="font-semibold">ВКонтакте</h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://vk.com/realty_wera" target="_blank" rel="noopener noreferrer">
                    Написать в VK
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Send" className="text-accent" size={32} />
                </div>
                <h3 className="font-semibold">Telegram</h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://t.me/bashnedvizh" target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Phone" className="text-accent" size={32} />
                </div>
                <h3 className="font-semibold">Телефон</h3>
                <Button variant="outline" className="w-full">
                  Заказать звонок
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Оставьте заявку</h3>
                  <p className="text-muted-foreground">
                    Подберу 3-5 подходящих квартир в новостройках Уфы за 1 день
                  </p>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="contact-name">Ваше имя</Label>
                      <Input id="contact-name" placeholder="Как к вам обращаться?" />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Телефон</Label>
                      <Input id="contact-phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Что ищете?</Label>
                      <Input id="contact-message" placeholder="Например: 2-комн, Советский район, до 4 млн" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                      Отправить заявку
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-semibold">География работы</p>
                      <p className="text-sm text-muted-foreground">
                        Уфа и Уфимский район: Советский, Кировский, Октябрьский, 
                        Ленинский, Орджоникидзевский, Дема, Зеленая Роща
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Партнёрство</p>
                      <p className="text-sm text-muted-foreground">
                        Официальный партнёр крупных застройщиков Уфы и 
                        ведущих банков Башкортостана
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-semibold">График работы</p>
                      <p className="text-sm text-muted-foreground">
                        Ежедневно с 9:00 до 21:00. Отвечаю в течение 15 минут
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Гарантии</p>
                      <p className="text-sm text-muted-foreground">
                        Договор на оказание услуг, проверка всех документов, 
                        сопровождение до получения ключей
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/5 border-t border-accent/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" className="text-accent" size={28} />
                <div>
                  <h3 className="font-bold">Недвижимость Уфы</h3>
                  <p className="text-xs text-muted-foreground">Риэлтор по новостройкам</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Помогаю купить квартиру в новостройке Уфы без комиссии 
                с полным юридическим сопровождением
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">Подбор квартир</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Ипотека</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Юрсопровождение</a></li>
                <li><a href="#buildings" className="hover:text-accent transition-colors">Каталог новостроек</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#blog" className="hover:text-accent transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">О риэлторе</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <a href="https://vk.com/realty_wera" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Icon name="MessageCircle" size={16} />
                  ВКонтакте
                </a>
                <a href="https://t.me/bashnedvizh" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
                <p className="text-muted-foreground">
                  <Icon name="MapPin" size={16} className="inline mr-2" />
                  г. Уфа, Башкортостан
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-accent/20 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Недвижимость Уфы. Риэлтор по новостройкам в Уфе и Уфимском районе</p>
            <p className="mt-2">
              Купить квартиру в новостройке Уфы • Ипотека от 11.9% • Юридическое сопровождение
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;