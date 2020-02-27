// Copyright 2018-2020, University of Colorado Boulder

/**
 * The sole scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerColors from '../../../../equality-explorer/js/common/EqualityExplorerColors.js';
import EqualityExplorerConstants from '../../../../equality-explorer/js/common/EqualityExplorerConstants.js';
import ConstantTermCreator from '../../../../equality-explorer/js/common/model/ConstantTermCreator.js';
import EqualityExplorerScene from '../../../../equality-explorer/js/common/model/EqualityExplorerScene.js';
import Variable from '../../../../equality-explorer/js/common/model/Variable.js';
import VariableTermCreator from '../../../../equality-explorer/js/common/model/VariableTermCreator.js';
import equalityExplorerStrings from '../../../../equality-explorer/js/equality-explorer-strings.js';
import inherit from '../../../../phet-core/js/inherit.js';
import equalityExplorerTwoVariablesStrings from '../../equality-explorer-two-variables-strings.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';

// string
const xString = equalityExplorerStrings.x;
const yString = equalityExplorerTwoVariablesStrings.y;

/**
 * @constructor
 */
function TwoVariablesScene() {

  const variableOptions = {
    range: EqualityExplorerConstants.VARIABLE_RANGE
  };
  const xVariable = new Variable( xString, variableOptions );
  const yVariable = new Variable( yString, variableOptions );

  EqualityExplorerScene.call( this,
    createTermCreators( xVariable, yVariable ),
    createTermCreators( xVariable, yVariable ), {
      debugName: 'twoVariables',
      variables: [ xVariable, yVariable ],
      numberOfSnapshots: 4
    } );
}

equalityExplorerTwoVariables.register( 'TwoVariablesScene', TwoVariablesScene );

/**
 * Creates the term creators for this scene.
 * @param {Variable} xVariable
 * @param {Variable} yVariable
 * @returns {TermCreator[]}
 */
function createTermCreators( xVariable, yVariable ) {

  return [

    // x & -x
    new VariableTermCreator( xVariable ),

    // y & -y
    new VariableTermCreator( yVariable, {
      positiveFill: EqualityExplorerColors.POSITIVE_Y_FILL,
      negativeFill: EqualityExplorerColors.NEGATIVE_Y_FILL
    } ),

    new ConstantTermCreator()
  ];
}

inherit( EqualityExplorerScene, TwoVariablesScene );
export default TwoVariablesScene;