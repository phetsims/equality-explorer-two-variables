// Copyright 2018-2020, University of Colorado Boulder

/**
 * Model for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import TwoVariablesScene from './TwoVariablesScene.js';

export default class TwoVariablesModel extends EqualityExplorerModel<TwoVariablesScene> {

  public constructor() {
    super( [ new TwoVariablesScene() ] );
  }
}

equalityExplorerTwoVariables.register( 'TwoVariablesModel', TwoVariablesModel );