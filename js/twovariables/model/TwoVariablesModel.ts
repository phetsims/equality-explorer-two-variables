// Copyright 2018-2022, University of Colorado Boulder

/**
 * Model for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import TwoVariablesScene from './TwoVariablesScene.js';

export default class TwoVariablesModel extends EqualityExplorerModel<TwoVariablesScene> {

  public constructor( tandem: Tandem ) {
    super( [ new TwoVariablesScene() ], tandem );
  }
}

equalityExplorerTwoVariables.register( 'TwoVariablesModel', TwoVariablesModel );