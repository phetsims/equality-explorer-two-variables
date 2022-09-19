// Copyright 2018-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * Model for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import TwoVariablesScene from './TwoVariablesScene.js';

class TwoVariablesModel extends EqualityExplorerModel {

  constructor() {
    super( [ new TwoVariablesScene() ] );
  }
}

equalityExplorerTwoVariables.register( 'TwoVariablesModel', TwoVariablesModel );

export default TwoVariablesModel;