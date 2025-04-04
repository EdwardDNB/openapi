/*
 * Car Rental API
 * API for managing cars and reservations in a car rental system.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The Car model module.
 * @module model/Car
 * @version 1.0.0
 */
export default class Car {
  /**
   * Constructs a new <code>Car</code>.
   * @alias module:model/Car
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Car</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Car} obj Optional instance to populate.
   * @return {module:model/Car} The populated <code>Car</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Car();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('make'))
        obj.make = ApiClient.convertToType(data['make'], 'String');
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Car.prototype.id = undefined;

/**
 * @member {String} make
 */
Car.prototype.make = undefined;

/**
 * @member {String} model
 */
Car.prototype.model = undefined;

/**
 * @member {Number} year
 */
Car.prototype.year = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Car.StatusEnum = {
  /**
   * value: "available"
   * @const
   */
  available: "available",

  /**
   * value: "rented"
   * @const
   */
  rented: "rented",

  /**
   * value: "maintenance"
   * @const
   */
  maintenance: "maintenance"
};
/**
 * @member {module:model/Car.StatusEnum} status
 */
Car.prototype.status = undefined;

