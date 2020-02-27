// Copyright 2018-2019, University of Colorado Boulder

/**
 * The 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import EqualityExplorerScreen from '../../../equality-explorer/js/common/EqualityExplorerScreen.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import equalityExplorerTwoVariables from '../equalityExplorerTwoVariables.js';
import TwoVariablesModel from './model/TwoVariablesModel.js';
import TwoVariablesScreenView from './view/TwoVariablesScreenView.js';

/**
 * @param {Object} [options]
 * @constructor
 */
function TwoVariablesScreen( options ) {

  options = merge( {

    // EqualityExplorerScreen options
    backgroundColorProperty: new Property( 'rgb( 214, 233, 254 )' )
  }, options );

  EqualityExplorerScreen.call( this,
    function() { return new TwoVariablesModel(); },
    function( model ) { return new TwoVariablesScreenView( model ); },
    options
  );
}

equalityExplorerTwoVariables.register( 'TwoVariablesScreen', TwoVariablesScreen );

inherit( EqualityExplorerScreen, TwoVariablesScreen );
export default TwoVariablesScreen;