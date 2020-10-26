import { ProtocolV1 } from '../src';
import { MessageFactory } from '../src/MessageFactory';
import { BasicInfoResponse } from '../src/responses';

import { publicKey } from './messages/basicInfo.test';

describe('Message factory', () => {
	test.each([
		[
			Uint8Array.from([
				132,
				0,
				1,
				0,
				123,
				0,
				0,
				0,
				22,
				0,
				0,
				0,
				220,
				235,
				242,
				94,
				164,
				37,
				128,
				141,
				42,
				122,
				255,
				8,
				143,
				130,
				94,
				153,
				158,
				36,
				41,
				163,
				161,
				16,
				160,
				184,
				20,
				26,
				129,
				203,
				116,
				177,
				18,
				120,
				159,
				0,
				0,
				0,
				100,
				0,
				0,
				0,
				21,
				0,
				0,
				0,
				8,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				237,
				14,
				0,
				0,
				3,
				0,
				0,
				0,
			]),
			new BasicInfoResponse(
				new ProtocolV1(123, new Date(Date.UTC(2015, 0, 1, 18, 14, 28))),
				159,
				100,
				21,
				3,
				8,
				3821,
				publicKey
			),
		],
	])('parse', (bytes: Uint8Array, message) => {
		expect(MessageFactory.parse(bytes)).toEqual(message);
	});
});
