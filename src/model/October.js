/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: it@vilabs.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The October model module.
 * @module model/October
 * @version 1.0.0
 */
class October {
    /**
     * Constructs a new <code>October</code>.
     * @alias module:model/October
     * @param employeeOct {module:model/User} 
     * @param octDay1 {String} 
     * @param octDay2 {String} 
     * @param octDay3 {String} 
     * @param octDay4 {String} 
     * @param octDay5 {String} 
     * @param octDay6 {String} 
     * @param octDay7 {String} 
     * @param octDay8 {String} 
     * @param octDay9 {String} 
     * @param octDay10 {String} 
     * @param octDay11 {String} 
     * @param octDay12 {String} 
     * @param octDay13 {String} 
     * @param octDay14 {String} 
     * @param octDay15 {String} 
     * @param octDay16 {String} 
     * @param octDay17 {String} 
     * @param octDay18 {String} 
     * @param octDay20 {String} 
     * @param octDay21 {String} 
     * @param octDay22 {String} 
     */
    constructor(employeeOct, octDay1, octDay2, octDay3, octDay4, octDay5, octDay6, octDay7, octDay8, octDay9, octDay10, octDay11, octDay12, octDay13, octDay14, octDay15, octDay16, octDay17, octDay18, octDay20, octDay21, octDay22) { 
        
        October.initialize(this, employeeOct, octDay1, octDay2, octDay3, octDay4, octDay5, octDay6, octDay7, octDay8, octDay9, octDay10, octDay11, octDay12, octDay13, octDay14, octDay15, octDay16, octDay17, octDay18, octDay20, octDay21, octDay22);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, employeeOct, octDay1, octDay2, octDay3, octDay4, octDay5, octDay6, octDay7, octDay8, octDay9, octDay10, octDay11, octDay12, octDay13, octDay14, octDay15, octDay16, octDay17, octDay18, octDay20, octDay21, octDay22) { 
        obj['employeeOct'] = employeeOct;
        obj['octDay1'] = octDay1;
        obj['octDay2'] = octDay2;
        obj['octDay3'] = octDay3;
        obj['octDay4'] = octDay4;
        obj['octDay5'] = octDay5;
        obj['octDay6'] = octDay6;
        obj['octDay7'] = octDay7;
        obj['octDay8'] = octDay8;
        obj['octDay9'] = octDay9;
        obj['octDay10'] = octDay10;
        obj['octDay11'] = octDay11;
        obj['octDay12'] = octDay12;
        obj['octDay13'] = octDay13;
        obj['octDay14'] = octDay14;
        obj['octDay15'] = octDay15;
        obj['octDay16'] = octDay16;
        obj['octDay17'] = octDay17;
        obj['octDay18'] = octDay18;
        obj['octDay20'] = octDay20;
        obj['octDay21'] = octDay21;
        obj['octDay22'] = octDay22;
    }

    /**
     * Constructs a <code>October</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/October} obj Optional instance to populate.
     * @return {module:model/October} The populated <code>October</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new October();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('employeeOct')) {
                obj['employeeOct'] = ApiClient.convertToType(data['employeeOct'], User);
            }
            if (data.hasOwnProperty('octDay1')) {
                obj['octDay1'] = ApiClient.convertToType(data['octDay1'], 'String');
            }
            if (data.hasOwnProperty('octDay2')) {
                obj['octDay2'] = ApiClient.convertToType(data['octDay2'], 'String');
            }
            if (data.hasOwnProperty('octDay3')) {
                obj['octDay3'] = ApiClient.convertToType(data['octDay3'], 'String');
            }
            if (data.hasOwnProperty('octDay4')) {
                obj['octDay4'] = ApiClient.convertToType(data['octDay4'], 'String');
            }
            if (data.hasOwnProperty('octDay5')) {
                obj['octDay5'] = ApiClient.convertToType(data['octDay5'], 'String');
            }
            if (data.hasOwnProperty('octDay6')) {
                obj['octDay6'] = ApiClient.convertToType(data['octDay6'], 'String');
            }
            if (data.hasOwnProperty('octDay7')) {
                obj['octDay7'] = ApiClient.convertToType(data['octDay7'], 'String');
            }
            if (data.hasOwnProperty('octDay8')) {
                obj['octDay8'] = ApiClient.convertToType(data['octDay8'], 'String');
            }
            if (data.hasOwnProperty('octDay9')) {
                obj['octDay9'] = ApiClient.convertToType(data['octDay9'], 'String');
            }
            if (data.hasOwnProperty('octDay10')) {
                obj['octDay10'] = ApiClient.convertToType(data['octDay10'], 'String');
            }
            if (data.hasOwnProperty('octDay11')) {
                obj['octDay11'] = ApiClient.convertToType(data['octDay11'], 'String');
            }
            if (data.hasOwnProperty('octDay12')) {
                obj['octDay12'] = ApiClient.convertToType(data['octDay12'], 'String');
            }
            if (data.hasOwnProperty('octDay13')) {
                obj['octDay13'] = ApiClient.convertToType(data['octDay13'], 'String');
            }
            if (data.hasOwnProperty('octDay14')) {
                obj['octDay14'] = ApiClient.convertToType(data['octDay14'], 'String');
            }
            if (data.hasOwnProperty('octDay15')) {
                obj['octDay15'] = ApiClient.convertToType(data['octDay15'], 'String');
            }
            if (data.hasOwnProperty('octDay16')) {
                obj['octDay16'] = ApiClient.convertToType(data['octDay16'], 'String');
            }
            if (data.hasOwnProperty('octDay17')) {
                obj['octDay17'] = ApiClient.convertToType(data['octDay17'], 'String');
            }
            if (data.hasOwnProperty('octDay18')) {
                obj['octDay18'] = ApiClient.convertToType(data['octDay18'], 'String');
            }
            if (data.hasOwnProperty('octDay20')) {
                obj['octDay20'] = ApiClient.convertToType(data['octDay20'], 'String');
            }
            if (data.hasOwnProperty('octDay21')) {
                obj['octDay21'] = ApiClient.convertToType(data['octDay21'], 'String');
            }
            if (data.hasOwnProperty('octDay22')) {
                obj['octDay22'] = ApiClient.convertToType(data['octDay22'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
October.prototype['_id'] = undefined;

/**
 * @member {module:model/User} employeeOct
 */
October.prototype['employeeOct'] = undefined;

/**
 * @member {String} octDay1
 */
October.prototype['octDay1'] = undefined;

/**
 * @member {String} octDay2
 */
October.prototype['octDay2'] = undefined;

/**
 * @member {String} octDay3
 */
October.prototype['octDay3'] = undefined;

/**
 * @member {String} octDay4
 */
October.prototype['octDay4'] = undefined;

/**
 * @member {String} octDay5
 */
October.prototype['octDay5'] = undefined;

/**
 * @member {String} octDay6
 */
October.prototype['octDay6'] = undefined;

/**
 * @member {String} octDay7
 */
October.prototype['octDay7'] = undefined;

/**
 * @member {String} octDay8
 */
October.prototype['octDay8'] = undefined;

/**
 * @member {String} octDay9
 */
October.prototype['octDay9'] = undefined;

/**
 * @member {String} octDay10
 */
October.prototype['octDay10'] = undefined;

/**
 * @member {String} octDay11
 */
October.prototype['octDay11'] = undefined;

/**
 * @member {String} octDay12
 */
October.prototype['octDay12'] = undefined;

/**
 * @member {String} octDay13
 */
October.prototype['octDay13'] = undefined;

/**
 * @member {String} octDay14
 */
October.prototype['octDay14'] = undefined;

/**
 * @member {String} octDay15
 */
October.prototype['octDay15'] = undefined;

/**
 * @member {String} octDay16
 */
October.prototype['octDay16'] = undefined;

/**
 * @member {String} octDay17
 */
October.prototype['octDay17'] = undefined;

/**
 * @member {String} octDay18
 */
October.prototype['octDay18'] = undefined;

/**
 * @member {String} octDay20
 */
October.prototype['octDay20'] = undefined;

/**
 * @member {String} octDay21
 */
October.prototype['octDay21'] = undefined;

/**
 * @member {String} octDay22
 */
October.prototype['octDay22'] = undefined;






export default October;
