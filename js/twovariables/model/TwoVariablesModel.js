// Copyright 2018, University of Colorado Boulder

/**
 * Model for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var equalityExplorer = require( 'EQUALITY_EXPLORER/equalityExplorer' );
  var EqualityExplorerModel = require( 'EQUALITY_EXPLORER/common/model/EqualityExplorerModel' );
  var inherit = require( 'PHET_CORE/inherit' );
  var TwoVariablesScene = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/model/TwoVariablesScene' );

  /**
   * @constructor
   */
  function TwoVariablesModel() {
    EqualityExplorerModel.call( this, [ new TwoVariablesScene() ] );
  }

  equalityExplorer.register( 'TwoVariablesModel', TwoVariablesModel );

  return inherit( EqualityExplorerModel, TwoVariablesModel );
} );