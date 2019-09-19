// Copyright 2018, University of Colorado Boulder

/**
 * The 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const EqualityExplorerScreen = require( 'EQUALITY_EXPLORER/common/EqualityExplorerScreen' );
  const equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const TwoVariablesModel = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/model/TwoVariablesModel' );
  const TwoVariablesScreenView = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/view/TwoVariablesScreenView' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function TwoVariablesScreen( options ) {

    options = _.extend( {

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

  return inherit( EqualityExplorerScreen, TwoVariablesScreen );
} );