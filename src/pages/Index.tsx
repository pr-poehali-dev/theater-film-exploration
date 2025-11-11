import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Web-разработка с нуля',
    description: 'Полный курс по созданию современных веб-приложений',
    duration: '12 недель',
    lessons: 48,
    students: 2340,
    progress: 0,
    price: '29 990 ₽',
    category: 'Программирование',
    level: 'Начинающий',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
  },
  {
    id: 2,
    title: 'Дизайн интерфейсов',
    description: 'Создавайте красивые и функциональные UI/UX дизайны',
    duration: '8 недель',
    lessons: 32,
    students: 1890,
    progress: 45,
    price: '24 990 ₽',
    category: 'Дизайн',
    level: 'Средний',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
  },
  {
    id: 3,
    title: 'Python для Data Science',
    description: 'Анализ данных и машинное обучение на Python',
    duration: '10 недель',
    lessons: 40,
    students: 3120,
    progress: 0,
    price: '34 990 ₽',
    category: 'Программирование',
    level: 'Средний',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
  },
  {
    id: 4,
    title: 'Digital-маркетинг',
    description: 'Комплексная стратегия продвижения в интернете',
    duration: '6 недель',
    lessons: 24,
    students: 1560,
    progress: 78,
    price: '19 990 ₽',
    category: 'Маркетинг',
    level: 'Начинающий',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: 5,
    title: 'Мобильная разработка',
    description: 'Создание iOS и Android приложений на React Native',
    duration: '14 недель',
    lessons: 56,
    students: 980,
    progress: 23,
    price: '39 990 ₽',
    category: 'Программирование',
    level: 'Продвинутый',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
  },
  {
    id: 6,
    title: '3D моделирование',
    description: 'Blender для начинающих и продвинутых пользователей',
    duration: '9 недель',
    lessons: 36,
    students: 1240,
    progress: 0,
    price: '27 990 ₽',
    category: 'Дизайн',
    level: 'Средний',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80'
  }
];

const blogPosts = [
  {
    id: 1,
    title: '10 трендов в веб-разработке 2024',
    excerpt: 'Узнайте, какие технологии будут определять будущее веб-разработки в этом году',
    date: '15 янв 2024',
    readTime: '5 мин',
    category: 'Программирование',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
  },
  {
    id: 2,
    title: 'Как выбрать первый IT-курс',
    excerpt: 'Практические советы для тех, кто только начинает свой путь в IT',
    date: '12 янв 2024',
    readTime: '7 мин',
    category: 'Карьера',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80'
  },
  {
    id: 3,
    title: 'Секреты эффективного обучения',
    excerpt: 'Научные методики, которые помогут вам учиться быстрее и запоминать больше',
    date: '10 янв 2024',
    readTime: '6 мин',
    category: 'Обучение',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
  }
];

const stats = [
  { label: 'Студентов', value: '15 000+', icon: 'Users' },
  { label: 'Курсов', value: '120+', icon: 'BookOpen' },
  { label: 'Преподавателей', value: '80+', icon: 'GraduationCap' },
  { label: 'Сертификатов', value: '8 500+', icon: 'Award' }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduSpace
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                Начать учиться
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            🚀 Платформа №1 для онлайн-обучения
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
            Учись у лучших,
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              становись профессионалом
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Видеокурсы от экспертов индустрии. Практические навыки. Сертификаты. Гибкий график.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transition-all">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть бесплатный урок
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Compass" className="mr-2" size={20} />
              Подобрать курс
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mb-3">
                  <Icon name={stat.icon as any} className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные курсы</h2>
            <p className="text-lg text-muted-foreground">Выбирайте направление и начинайте обучение прямо сейчас</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>Все</TabsTrigger>
              <TabsTrigger value="Программирование" onClick={() => setSelectedCategory('Программирование')}>
                Программирование
              </TabsTrigger>
              <TabsTrigger value="Дизайн" onClick={() => setSelectedCategory('Дизайн')}>Дизайн</TabsTrigger>
              <TabsTrigger value="Маркетинг" onClick={() => setSelectedCategory('Маркетинг')}>Маркетинг</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90">{course.level}</Badge>
                  {course.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center gap-2 text-white text-sm mb-2">
                        <Icon name="TrendingUp" size={16} />
                        <span>Прогресс: {course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Video" size={16} />
                      <span>{course.lessons} уроков</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <Icon name="DollarSign" size={16} />
                      <span>{course.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                    {course.progress > 0 ? 'Продолжить обучение' : 'Записаться на курс'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground">Полезные статьи о обучении, карьере и технологиях</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Читать все статьи
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
            <CardContent className="relative p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Icon name="Trophy" className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Получите сертификат</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                После успешного завершения курса вы получите официальный сертификат, 
                который подтвердит ваши навыки перед работодателями
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Узнать подробнее
                <Icon name="Award" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">EduSpace</span>
              </div>
              <p className="text-gray-400 text-sm">
                Образовательная платформа нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Все курсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 EduSpace. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
