import { fromLockUnoTime, ProtocolV1 } from '../src';
import { Envelope } from '../src/Envelope';
import { KnownKeyIDs } from '../src/enums/KeyID';
import { BasicInfoRequest } from '../src/requests/BasicInfoRequest';

describe('Envelope', () => {
	test.each([
		[
			new Envelope(
				KnownKeyIDs.ServerKey,
				new BasicInfoRequest(new ProtocolV1(3, fromLockUnoTime(500)))
			),
			Uint8Array.from([
				0x0c,
				0,
				0x32,
				0,
				0x83,
				0,
				0x01,
				0,
				0xf4,
				0x01,
				0,
				0,
				0x03,
				0,
				0,
				0,
			]),
		],
	])('create envelope', (envelope: Envelope, bytes: Uint8Array) => {
		expect(envelope.toBytes()).toEqual(bytes);
	});
});
