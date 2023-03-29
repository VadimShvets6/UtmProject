import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";

//Список таваров
class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [
                {
                    it: 1,
                    title: 'Кресло Конфорт',
                    img: 'creslo.jpg',
                    desc: 'Возможны различные вариации обивочной ткани! Цена зависит от используемых материалов!',
                    category: 'armchair',
                    price: '4700'
                },
                {
                    it: 2,
                    title: 'Диван PM POLO II BF',
                    img: 'divan.png',
                    desc: 'Раскладной диван это эргономичная, многофункциональная и невероятно удобная мебель, особенно с ограниченным пространством.',
                    category: 'sofa',
                    price: '14045'
                },
                {
                    it: 3,
                    title: 'Диван PM Viktoria-M',
                    img: 'divan2.jpg',
                    desc: 'Диван – кровать с системой трансформации «Еврокнижка» предназначен для ежедневного использования.',
                    category: 'sofa',
                    price: '11135'
                },
                {
                    it: 4,
                    title: 'Шкаф-купе Ambianta Rio 1.4 m sonoma închis',
                    img: 'scaf1.jpg',
                    desc: 'Материал: ламинированный ЛДСП Страна- производитель: Молдова',
                    category: 'closet',
                    price: '6600'
                },
                {
                    it: 5,
                    title: 'Шкаф Фадоме Шанэль CH1',
                    img: 'scaf2.jpg',
                    desc: 'Корпус/фасад: сосна ларедо/шоколад Вставки ПВК: глянцевый крем',
                    category: 'closet',
                    price: '12030'
                },
                {
                    it: 6,
                    title: 'Кровать Ambianta Rio 1.6 m (Кремона)',
                    img: 'loje1.jpg',
                    desc: 'С мягкой спинкой , с местом для хранения вещей , с подъемным механизмом , основание в комплекте',
                    category: 'bed',
                    price: '6900'
                },
                {
                    it: 7,
                    title: 'Кровать Premium Class Вера 1.4',
                    img: 'loje2.jpg',
                    desc: 'Высококачественные кровати “Вера”  имеют современный стиль и по этому подойдут любому интериеру.',
                    category: 'bed',
                    price: '8900'
                },
                {
                    it: 8,
                    title: 'Стол Kroll AG 3999 - 10 Persoane.',
                    img: 'stol1.jpg',
                    desc: 'Стол производства Малайзии, изготовленный из массива Гивеи. Гивея - малазийский дуб отличается высочайшей прочностью и износостойкостью, имеет высокую устойчивость к воздействию влаги.',
                    category: 'table',
                    price: '6240'
                },
                {
                    it: 9,
                    title: 'Стол Древмикс Max VII',
                    img: 'stol2.jpg',
                    desc: 'Цветa: ольха, орех, чирешня, дуб, бук, кальвадос, коньяк, венге',
                    category: 'table',
                    price: '3450'
                },
                {
                    it: 10,
                    title: 'Люстра Alfa 20511',
                    img: 'lustra.jpg',
                    desc: 'Макс. мощность ламп: 60 Вт',
                    category: 'chandelier',
                    price: '1223'
                },
            ]
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <Items items={this.state.items}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
