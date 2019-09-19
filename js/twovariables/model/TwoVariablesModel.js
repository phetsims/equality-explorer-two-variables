// Copyright 2018, University of Colorado Boulder

/**
 * Model for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const EqualityExplorerModel = require( 'EQUALITY_EXPLORER/common/model/EqualityExplorerModel' );
  const equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  const inherit = require( 'PHET_CORE/inherit' );
  const TwoVariablesScene = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/model/TwoVariablesScene' );

  /**
   * @constructor
   */
  function TwoVariablesModel() {
    EqualityExplorerModel.call( this, [ new TwoVariablesScene() ] );
  }

  equalityExplorerTwoVariables.register( 'TwoVariablesModel', TwoVariablesModel );

  return inherit( EqualityExplorerModel, TwoVariablesModel );
} );