// Copyright 2018-2020, University of Colorado Boulder

/**
 * The 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import EqualityExplorerScreen from '../../../equality-explorer/js/common/EqualityExplorerScreen.js';
import merge from '../../../phet-core/js/merge.js';
import equalityExplorerTwoVariables from '../equalityExplorerTwoVariables.js';
import TwoVariablesModel from './model/TwoVariablesModel.js';
import TwoVariablesScreenView from './view/TwoVariablesScreenView.js';

class TwoVariablesScreen extends EqualityExplorerScreen {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( {

      // EqualityExplorerScreen options
      backgroundColorProperty: new Property( 'rgb( 214, 233, 254 )' )
    }, options );

    super(
      () => new TwoVariablesModel(),
      model => new TwoVariablesScreenView( model ),
      options
    );
  }
}

equalityExplorerTwoVariables.register( 'TwoVariablesScreen', TwoVariablesScreen );

export default TwoVariablesScreen;