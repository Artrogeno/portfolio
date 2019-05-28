import React, { useState, useEffect } from 'react';
import Isotope from 'isotope-layout'

import './IsotopeGrid.scss'

const IsotopeGrid = () => {
  // init Isotope
  const iso = new Isotope( '.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  })

  // filter functions
  const filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      const number = itemElem.querySelector('.number').textContent
      return parseInt( number, 10 ) > 50
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      const name = itemElem.querySelector('.name').textContent;
      return name.match( /ium$/ )
    }
  }

  // bind filter button click
  const filtersElem = document.querySelector('.filters-button-group')
  filtersElem.addEventListener('click', (event) => {
    // only work with buttons
    if ( !filtersElem.matchesSelector( event.target, 'button' ) ) return
    let filterValue = event.target.getAttribute('data-filter')
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue
    iso.arrange({ filter: filterValue })
  })

  // change is-checked class on buttons
  const buttonGroups = document.querySelectorAll('.button-group')
  for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
    const buttonGroup = buttonGroups[i]
    radioButtonGroup( buttonGroup )
  }

  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !buttonGroup.matchesSelector( event.target, 'button' ) ) {
        return
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked')
      event.target.classList.add('is-checked')
    })
  }

  // useEffect(() => {
  //   isotopeHandler()
  // });

  return (
    <div className="IsotopeGrid">
      <div class="button-group filters-button-group">
        <button class="button is-checked" data-filter="*">show all</button>
        <button class="button" data-filter=".metal">metal</button>
        <button class="button" data-filter=".transition">transition</button>
        <button class="button" data-filter=".alkali, .alkaline-earth">alkali and alkaline-earth</button>
        <button class="button" data-filter=":not(.transition)">not transition</button>
        <button class="button" data-filter=".metal:not(.transition)">metal but not transition</button>
        <button class="button" data-filter="numberGreaterThan50">number > 50</button>
        <button class="button" data-filter="ium">name ends with &ndash;ium</button>
      </div>
      <div className="grid">
        <div className="element-item transition metal " data-category="transition">
          <h3 className="name">Mercury</h3>
          <p className="symbol">Hg</p>
          <p className="number">80</p>
          <p className="weight">200.59</p>
        </div>
        <div className="element-item metalloid " data-category="metalloid">
          <h3 className="name">Tellurium</h3>
          <p className="symbol">Te</p>
          <p className="number">52</p>
          <p className="weight">127.6</p>
        </div>
        <div className="element-item post-transition metal " data-category="post-transition">
          <h3 className="name">Bismuth</h3>
          <p className="symbol">Bi</p>
          <p className="number">83</p>
          <p className="weight">208.980</p>
        </div>
        <div className="element-item post-transition metal " data-category="post-transition">
          <h3 className="name">Lead</h3>
          <p className="symbol">Pb</p>
          <p className="number">82</p>
          <p className="weight">207.2</p>
        </div>
        <div className="element-item transition metal " data-category="transition">
          <h3 className="name">Gold</h3>
          <p className="symbol">Au</p>
          <p className="number">79</p>
          <p className="weight">196.967</p>
        </div>
        <div className="element-item alkali metal " data-category="alkali">
          <h3 className="name">Potassium</h3>
          <p className="symbol">K</p>
          <p className="number">19</p>
          <p className="weight">39.0983</p>
        </div>
        <div className="element-item alkali metal " data-category="alkali">
          <h3 className="name">Sodium</h3>
          <p className="symbol">Na</p>
          <p className="number">11</p>
          <p className="weight">22.99</p>
        </div>
        <div className="element-item transition metal " data-category="transition">
          <h3 className="name">Cadmium</h3>
          <p className="symbol">Cd</p>
          <p className="number">48</p>
          <p className="weight">112.411</p>
        </div>
        <div className="element-item alkaline-earth metal " data-category="alkaline-earth">
          <h3 className="name">Calcium</h3>
          <p className="symbol">Ca</p>
          <p className="number">20</p>
          <p className="weight">40.078</p>
        </div>
        <div className="element-item transition metal " data-category="transition">
          <h3 className="name">Rhenium</h3>
          <p className="symbol">Re</p>
          <p className="number">75</p>
          <p className="weight">186.207</p>
        </div>
        <div className="element-item post-transition metal " data-category="post-transition">
          <h3 className="name">Thallium</h3>
          <p className="symbol">Tl</p>
          <p className="number">81</p>
          <p className="weight">204.383</p>
        </div>
        <div className="element-item metalloid " data-category="metalloid">
          <h3 className="name">Antimony</h3>
          <p className="symbol">Sb</p>
          <p className="number">51</p>
          <p className="weight">121.76</p>
        </div>
        <div className="element-item transition metal " data-category="transition">
          <h3 className="name">Cobalt</h3>
          <p className="symbol">Co</p>
          <p className="number">27</p>
          <p className="weight">58.933</p>
        </div>
        <div className="element-item lanthanoid metal inner-transition " data-category="lanthanoid">
          <h3 className="name">Ytterbium</h3>
          <p className="symbol">Yb</p>
          <p className="number">70</p>
          <p className="weight">173.054</p>
        </div>
        <div className="element-item noble-gas nonmetal " data-category="noble-gas">
          <h3 className="name">Argon</h3>
          <p className="symbol">Ar</p>
          <p className="number">18</p>
          <p className="weight">39.948</p>
        </div>
        <div className="element-item diatomic nonmetal " data-category="diatomic">
          <h3 className="name">Nitrogen</h3>
          <p className="symbol">N</p>
          <p className="number">7</p>
          <p className="weight">14.007</p>
        </div>
        <div className="element-item actinoid metal inner-transition " data-category="actinoid">
          <h3 className="name">Uranium</h3>
          <p className="symbol">U</p>
          <p className="number">92</p>
          <p className="weight">238.029</p>
        </div>
        <div className="element-item actinoid metal inner-transition " data-category="actinoid">
          <h3 className="name">Plutonium</h3>
          <p className="symbol">Pu</p>
          <p className="number">94</p>
          <p className="weight">(244)</p>
        </div>
      </div>
    </div>
  )
}

export default IsotopeGrid

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import Isotope from 'isotope-layout'

// class IsotopeGrid extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { isotope: null }
//   }

//   componentDidMount() {
//     const node = ReactDOM.findDOMNode(this)
//     if (!this.state.isotope) {
//       this.setState({
//         isotope: new Isotope(node)
//       })
//     } else {
//       this.state.isotope.reloadItems()
//     }
//   }

//   componentDidUpdate() {
//     if (this.state.isotope) {
//       this.state.isotope.reloadItems()
//       this.state.isotope.layout()
//     }
//   }

//   render() {
//     return (
//       <div className="item-grid">
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default IsotopeGrid
