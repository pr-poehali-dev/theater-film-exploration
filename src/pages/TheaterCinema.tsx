import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const TheaterCinema = () => {
  const goals = [
    {
      title: 'Развлекательная функция',
      description: 'Создание эмоционального опыта, отдых от повседневности, получение эстетического удовольствия',
      icon: 'Smile',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Просветительская функция',
      description: 'Передача знаний, культурных ценностей, исторических событий через художественные образы',
      icon: 'BookOpen',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Социальная критика',
      description: 'Поднятие острых общественных проблем, критика пороков, стимулирование социальных изменений',
      icon: 'AlertCircle',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Моделирование поведения',
      description: 'Демонстрация различных жизненных ситуаций, формирование ценностных ориентиров, воспитательная роль',
      icon: 'Users',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Культурная интеграция',
      description: 'Объединение людей через общий культурный опыт, формирование коллективной идентичности',
      icon: 'Globe',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Психологическая функция',
      description: 'Катарсис (эмоциональное очищение), проработка внутренних конфликтов через сопереживание героям',
      icon: 'Heart',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const theaterFeatures = [
    'Живое присутствие актёров и зрителей',
    'Уникальность каждого представления',
    'Непосредственный эмоциональный контакт',
    'Условность пространства и времени',
    'Ограниченное количество зрителей',
    'Синтез актёрской игры, музыки, декораций, света'
  ];

  const cinemaFeatures = [
    'Тиражируемость и массовость',
    'Монтаж и спецэффекты',
    'Возможность крупных планов',
    'Документальная точность изображения',
    'Глобальный охват аудитории',
    'Синтез изображения, звука, музыки, монтажа'
  ];

  const examples = [
    {
      title: '"Список Шиндлера" (1993)',
      director: 'Стивен Спилберг',
      type: 'Кино',
      impact: 'Показал ужасы Холокоста, повлиял на мировую память о геноциде, получил 7 "Оскаров"',
      themes: ['Холокост', 'Героизм', 'Человечность'],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    },
    {
      title: '"Ревизор" Н.В. Гоголя',
      director: 'Постановки разных театров',
      type: 'Театр',
      impact: 'Острая сатира на коррупцию и чиновничество, актуальна спустя 200 лет, входит в репертуар всех ведущих театров',
      themes: ['Коррупция', 'Социальная сатира', 'Мораль'],
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80'
    },
    {
      title: '"Зелёная книга" (2018)',
      director: 'Питер Фаррелли',
      type: 'Кино',
      impact: 'История о расизме в США 1960-х, получил "Оскар" за лучший фильм, стимулировал дискуссию о расовой справедливости',
      themes: ['Расизм', 'Дружба', 'Толерантность'],
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80'
    },
    {
      title: '"Гамлет" У. Шекспира',
      director: 'Постановки МХТ, Таганки, Современника',
      type: 'Театр',
      impact: 'Вечные вопросы выбора, морали, власти. Каждая эпоха находит в пьесе актуальные смыслы',
      themes: ['Философия', 'Выбор', 'Власть'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Film" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Театр и Кино
              </span>
            </div>
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Home" size={18} />
              На главную
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 animate-fade-in" variant="secondary">
              📚 Обществознание
            </Badge>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight animate-fade-in">
              Театр и кино как
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                виды искусства
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Полный разбор целей, функций и особенностей театральных постановок и кино
            </p>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Target" className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold">1. Цели и функции в обществе</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {goals.map((goal, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4`}>
                      <Icon name={goal.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {goal.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Ключевой вывод</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Театр и кино выполняют множество функций одновременно: развлекают, просвещают, критикуют, 
                      воспитывают, объединяют людей и помогают перерабатывать эмоции. Это делает их мощными 
                      инструментами влияния на общество и формирования культурных ценностей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-16" />

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold">2. Особенности театра и кино</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="overflow-hidden border-2 border-primary/30 hover:shadow-2xl transition-all">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80" 
                    alt="Театр"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Theater" className="text-white" size={80} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Theater" className="text-primary" size={28} />
                    Театр
                  </CardTitle>
                  <CardDescription className="text-base">
                    Искусство живого действия
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {theaterFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" className="text-primary" size={16} />
                        </div>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-secondary/30 hover:shadow-2xl transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" 
                    alt="Кино"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Film" className="text-white" size={80} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Film" className="text-secondary" size={28} />
                    Кино
                  </CardTitle>
                  <CardDescription className="text-base">
                    Искусство экрана
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cinemaFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" className="text-secondary" size={16} />
                        </div>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-secondary/20 mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-green-600" size={24} />
                  Сходства театра и кино
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Dot" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-base">Синтез искусств (музыка, живопись, литература, актёрское мастерство)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Dot" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-base">Зрелищность и визуальное воздействие</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Dot" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-base">Прямое воздействие на эмоции зрителей</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Dot" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-base">Создание художественной реальности</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Dot" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-base">Сюжет и драматургия как основа</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Dot" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-base">Коллективный характер творчества</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="GitCompare" className="text-orange-600" size={24} />
                  Ключевое различие
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 p-5 rounded-lg border border-primary/20">
                    <h4 className="font-bold text-lg mb-2 text-primary">Театр</h4>
                    <p className="text-base leading-relaxed">
                      «Здесь и сейчас» — каждый спектакль уникален, живой контакт с актёрами, 
                      ограниченное пространство, камерность, условность
                    </p>
                  </div>
                  <div className="bg-white/60 p-5 rounded-lg border border-secondary/20">
                    <h4 className="font-bold text-lg mb-2 text-secondary">Кино</h4>
                    <p className="text-base leading-relaxed">
                      Тиражируемость, техническое совершенство, массовость охвата, 
                      возможность повтора, монтаж и спецэффекты
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-16" />

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Icon name="Star" className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold">3. Примеры влиятельных работ</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-scale-in border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-base">
                      {example.type === 'Кино' ? '🎬 Кино' : '🎭 Театр'}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {example.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {example.director}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-base">
                        <Icon name="TrendingUp" size={18} />
                        Влияние на общество
                      </h4>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {example.impact}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-base">Поднятые темы</h4>
                      <div className="flex flex-wrap gap-2">
                        {example.themes.map((theme, i) => (
                          <Badge key={i} variant="secondary" className="text-sm">
                            {theme}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
            <CardContent className="relative p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Итоговая характеристика</h3>
                  <p className="text-lg leading-relaxed text-white/95 mb-4">
                    <strong>Театр</strong> — живое искусство непосредственного контакта, где каждый спектакль уникален. 
                    Сила театра в присутствии актёра и зрителя в одном пространстве, создающем особую энергетику.
                  </p>
                  <p className="text-lg leading-relaxed text-white/95">
                    <strong>Кино</strong> — массовое искусство, способное охватить миллионы зрителей одновременно. 
                    Сила кино в технических возможностях, монтаже и способности создавать любую визуальную реальность.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Образовательный материал по обществознанию</p>
          <p className="text-sm text-gray-500 mt-2">© 2024 EduSpace</p>
        </div>
      </footer>
    </div>
  );
};

export default TheaterCinema;
