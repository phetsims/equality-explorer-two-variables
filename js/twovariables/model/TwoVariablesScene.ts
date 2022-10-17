// Copyright 2018-2022, University of Colorado Boulder

/**
 * The sole scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerColors from '../../../../equality-explorer/js/common/EqualityExplorerColors.js';
import EqualityExplorerConstants from '../../../../equality-explorer/js/common/EqualityExplorerConstants.js';
import ConstantTermCreator from '../../../../equality-explorer/js/common/model/ConstantTermCreator.js';
import EqualityExplorerScene from '../../../../equality-explorer/js/common/model/EqualityExplorerScene.js';
import TermCreator from '../../../../equality-explorer/js/common/model/TermCreator.js';
import Variable from '../../../../equality-explorer/js/common/model/Variable.js';
import VariableTermCreator from '../../../../equality-explorer/js/common/model/VariableTermCreator.js';
import EqualityExplorerStrings from '../../../../equality-explorer/js/EqualityExplorerStrings.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import EqualityExplorerTwoVariablesStrings from '../../EqualityExplorerTwoVariablesStrings.js';

export default class TwoVariablesScene extends EqualityExplorerScene {

  public constructor( tandem: Tandem ) {

    const variableOptions = {
      range: EqualityExplorerConstants.VARIABLE_RANGE
    };

    const xVariable = new Variable( EqualityExplorerStrings.xStringProperty, variableOptions );
    const yVariable = new Variable( EqualityExplorerTwoVariablesStrings.yStringProperty, variableOptions );

    const leftTermCreators = createTermCreators( xVariable, yVariable, tandem.createTandem( 'leftTermCreators' ) );
    const rightTermCreators = createTermCreators( xVariable, yVariable, tandem.createTandem( 'rightTermCreators' ) );

    super( leftTermCreators, rightTermCreators, {
      variables: [ xVariable, yVariable ],
      numberOfSnapshots: 4,
      tandem: tandem
    } );
  }
}

/**
 * Creates the term creators for this scene.
 */
function createTermCreators( xVariable: Variable, yVariable: Variable, parentTandem: Tandem ): TermCreator[] {

  return [

    // x & -x
    new VariableTermCreator( xVariable, {
      tandem: parentTandem.createTandem( 'xVariableTermCreator' )
    } ),

    // y & -y
    new VariableTermCreator( yVariable, {
      positiveFill: EqualityExplorerColors.POSITIVE_Y_FILL,
      negativeFill: EqualityExplorerColors.NEGATIVE_Y_FILL,
      tandem: parentTandem.createTandem( 'yVariableTermCreator' )
    } ),

    // 1 & -1
    new ConstantTermCreator( {
      tandem: parentTandem.createTandem( 'constantTermCreator' )
    } )
  ];
}

equalityExplorerTwoVariables.register( 'TwoVariablesScene', TwoVariablesScene );