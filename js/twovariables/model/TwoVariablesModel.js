// Copyright 2018-2020, University of Colorado Boulder

/**
 * Model for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import inherit from '../../../../phet-core/js/inherit.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import TwoVariablesScene from './TwoVariablesScene.js';

/**
 * @constructor
 */
function TwoVariablesModel() {
  EqualityExplorerModel.call( this, [ new TwoVariablesScene() ] );
}

equalityExplorerTwoVariables.register( 'TwoVariablesModel', TwoVariablesModel );

inherit( EqualityExplorerModel, TwoVariablesModel );
export default TwoVariablesModel;