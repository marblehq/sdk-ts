export enum MessageType {
	NullMessageType = 0x0000,
	CommandResponse = 0x0001,
	EventReport = 0x0002,
	StartSetupProcess = 0x0003,
	ContinueSetupProcess = 0x0004,
	ConfigurationStep = 0x0005,
	TrustNewKey = 0x0006,
	UntrustKey = 0x0007,
	LockUnlockChallenge = 0x0008,
	LockUnlockCommand = 0x0009,
	CurrentTimeRequest = 0x000a,
	CurrentTime = 0x000b,
	NewFirmware = 0x000c,
	NewFirmwareResume = 0x001c,
	NewFirmwareData = 0x000d,
	NewFirmwareUpdate = 0x000e,
	FirmwareInfoRequest = 0x000f,
	FirmwareInfo = 0x0010,
	LogInfoRequest = 0x0011,
	LogInfo = 0x0012,
	LogRequest = 0x0013,
	LogEntry = 0x0014,
	LogDelete = 0x0015,
	ServerStatus = 0x0016,
	ServerNeed = 0x0017,
	LockSettings = 0x0018,
	LockStatus = 0x0019,
	DebugInfoRequest = 0x0020,
	DebugInfoResponse = 0x0021,
	FactoryReset = 0x0023,
	LockStateRequest = 0x0026,
	LockStateResponse = 0x0027,
	SetupCode = 0x001a,
	EnterSetup = 0x001b,
	TrustNewRecurringKey = 0x001e,
	TrustNewTimeRestrictedKey = 0x001f,
	ScanIdentifier = 0x001d,
	ReadWriteConfiguration = 0x0024,
	ReadWriteConfigurationResponse = 0x0025,
	NonAuthenticatedCommandResponse = 0x0080,
	SetupRequest = 0x0081,
	SetupResponse = 0x0082,
	BasicInfoRequest = 0x0083,
	BasicInfoResponse = 0x0084,
	NewFirmwareDataUnauthenticated = 0x0085,
	NewWiFiFirmware = 0x0100,
	NewWiFiFirmwareSegment = 0x0101,
	NewWiFiFirmwareData = 0x0102,
	NewWiFiFirmwareSegmentBless = 0x0103,
	NewWiFiFirmwareBless = 0x0104,
	NewWiFiFirmwareUpdate = 0x0105,
	WiFiFirmwareRangedCRCRequest = 0x0106,
	WiFiFirmwareRangedCRCResponse = 0x0107,
	WiFiFirmwareInfoRequest = 0x0108,
	WiFiFirmwareInfoResponse = 0x0109,
	ChallengeRequest = 0x0200,
	HomekitSetupRequest = 0x1000,
	WiFiScan = 0x010a,
	WiFiScanResponse = 0x010b,
	WiFiStatusRequest = 0x010e,
	WiFiStatusResponse = 0x010f,
	RawMessage = 0xffff,
	RelayResponse = 0x00ff,
}