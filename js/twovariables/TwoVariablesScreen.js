// Copyright 2018, University of Colorado Boulder

/**
 * The 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EqualityExplorerScreen = require( 'EQUALITY_EXPLORER/common/EqualityExplorerScreen' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var TwoVariablesModel = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/model/TwoVariablesModel' );
  var TwoVariablesScreenView = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/view/TwoVariablesScreenView' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function TwoVariablesScreen( options ) {

    options = _.extend( {
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