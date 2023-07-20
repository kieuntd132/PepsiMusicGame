import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TOOLBAR, LOA } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/StackNavigation'
import Header from '../../../component/header/Header'

const Rules: React.FC<MainStackScreenProps<'Rules'>> = ({ navigation, route }) => {
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Thể lệ chương trình</Text>
            </View>
        )
    }
    const hanldeLogin = () => {
        navigation.navigate("LogInSplash");
    }
    const bold1 = "\"SPVB\"";
    const bold2 = "\"SẢNG KHOÁI PEPSI – BUNG NHẠC CỰC CHẤT\"";
    const text = "Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội chủ nghĩa Việt Nam, và trên 14 tuổi. Nhân viên Công ty TNHH Nước giải khát Suntory PepsiCo Việt Nam (sau đây được gọi tắt là '\"SPVB\"') và các công ty, tổ chức, nhà cung cấp, đơn vị sản xuất trò chơi '\"SẢNG KHOÁI PEPSI – BUNG NHẠC CỰC CHẤT\"', các đại lý, nhà phân phối, các công ty quảng cáo, in ấn, nhà thầu, nhà cung cấp dịch vụ của SPVB và thân nhân của các đối tượng này không được tham gia chương trình này.";
    const boldTexts = [bold1, bold2];
    const regex = new RegExp(`(${boldTexts.join('|')})`, 'gi');

    const getHighlightedText = (text: string, boldTexts: any) => {
        const parts = text.split(regex);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText2 = "Bước 1: Người chơi truy cập vào website";
    const boldTexts2 = ["Bước 1"];
    const regex2 = new RegExp(`(${boldTexts2.join('|')})`, 'gi');

    const getHighlightedText2 = (text: string, boldTexts: any) => {
        const parts = text.split(regex2);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText3 = "\nhttp://pepsimusic.pepsishop.vn/ và thu âm bài hát.";
    const boldTexts3 = ["http://pepsimusic.pepsishop.vn/"];
    const regex3 = new RegExp(`(${boldTexts3.join('|')})`, 'gi');

    const getHighlightedText3 = (text: string, boldTexts: any) => {
        const parts = text.split(regex3);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText4 = "Bước 2: Người chơi tải video bài hát đã tạo trên website";
    const boldTexts4 = ["Bước 2"];
    const regex4 = new RegExp(`(${boldTexts4.join('|')})`, 'gi');

    const getHighlightedText4 = (text: string, boldTexts: any) => {
        const parts = text.split(regex4);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText5 = "\nhttp://pepsimusic.pepsishop.vn/ và đăng video đó lên Facebook cá nhân công khai kèm\n#PepsiMusicGame #DaQuaPepsiOi\n#SangKhoaiPepsi #BungNhacCucChat";
    const boldTexts5 = ["http://pepsimusic.pepsishop.vn/"];
    const regex5 = new RegExp(`(${boldTexts5.join('|')})`, 'gi');

    const getHighlightedText5 = (text: string, boldTexts: any) => {
        const parts = text.split(regex5);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText6 = "Bước 3: Mỗi tuần, căn cứ vào mức độ Tương Tác của bài post có video tạo ra trên website";
    const boldTexts6 = ["Bước 3"];
    const regex6 = new RegExp(`(${boldTexts6.join('|')})`, 'gi');

    const getHighlightedText6 = (text: string, boldTexts: any) => {
        const parts = text.split(regex6);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText7 = "\nhttp://pepsimusic.pepsishop.vn/, SPVB sẽ công bố người thắng cuộc khi có nhiều lượt tương tác nhất (gồm lượt thích, bình luận và chia sẻ) vào lúc 12h00’ giờ ngày thứ 4 tuần kế tiếp trên\nhttps://www.facebook.com/Pepsivietnam trong thời gian diễn ra chương trình.";
    const boldTexts7 = ["http://pepsimusic.pepsishop.vn/", "https://www.facebook.com/Pepsivietnam"];
    const regex7 = new RegExp(`(${boldTexts7.join('|')})`, 'gi');

    const getHighlightedText7 = (text: string, boldTexts: any) => {
        const parts = text.split(regex7);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText8 = "Bước 4: Người chơi đăng bài trên trang cá nhân xong thì bình luận lại link post đó trên bài post thể lệ Pepsi fanpage";
    const boldTexts8 = ["Bước 4"];
    const regex8 = new RegExp(`(${boldTexts8.join('|')})`, 'gi');

    const getHighlightedText8 = (text: string, boldTexts: any) => {
        const parts = text.split(regex8);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText9 = " https://www.facebook.com/Pepsivietnam";
    const boldTexts9 = ["https://www.facebook.com/Pepsivietnam"];
    const regex9 = new RegExp(`(${boldTexts9.join('|')})`, 'gi');

    const getHighlightedText9 = (text: string, boldTexts: any) => {
        const parts = text.split(regex9);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText10 = "Số lượng: 4\nGiá trị quà tặng (+VAT): 8.000.000 đồng/ loa";
    const boldTexts10 = ["8.000.000 đồng/ loa"];
    const regex10 = new RegExp(`(${boldTexts10.join('|')})`, 'gi');

    const getHighlightedText10 = (text: string, boldTexts: any) => {
        const parts = text.split(regex10);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText11 = "- SPVB có quyền cập nhật và thay đổi thể lệ chương trình này để phù hợp hơn với người chơi và thông báo công khai đến người chơi. Trong trường hợp có sự thay đổi về thể lệ cũng như thời gian tổ chức, SPVB sẽ thông báo trên trang fanpage của chương trình tại https://www.facebook.com/Pepsivietnam";
    const boldTexts11 = ["https://www.facebook.com/Pepsivietnam"];
    const regex11 = new RegExp(`(${boldTexts11.join('|')})`, 'gi');

    const getHighlightedText11 = (text: string, boldTexts: any) => {
        const parts = text.split(regex11);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const boldText12 = "- Mọi thắc mắc liên quan đến chương trình, người chơi có thể nhắn tin vào hộp thư trang fanpage của chương trình tại:\nhttps://www.facebook.com/Pepsivietnam hoặc gọi điện theo số tổng đài 19001220. SPVB chỉ chịu trách nhiệm giải quyết những khiếu nại, tranh chấp được gửi đến SPVB trong thời hạn từ lúc bắt đầu chương trình cho đến khi hoàn tất việc trao quà tặng cho người chơi quy đổi quà tặng hợp lệ theo quy định tại Điều 2.4 nêu trên. Trong mọi trường hợp, nếu có tranh chấp về việc thực chương trình (bao gồm nhưng không giới hạn việc xác định người chơi chiến thắng theo bảng xếp hạng tuần, quy đổi quà tặng hợp lệ), thì quyền quyết định cuối cùng sẽ thuộc về SPVB.";
    const boldTexts12 = ["https://www.facebook.com/Pepsivietnam"];
    const regex12 = new RegExp(`(${boldTexts12.join('|')})`, 'gi');

    const getHighlightedText12 = (text: string, boldTexts: any) => {
        const parts = text.split(regex12);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={BACK}
                    leftHeader={hanldeLogin}
                    centerHeader={centerHeader()}
                />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.paragraph1}>
                        <Text style={styles.titleFirst}>SẢNG KHOÁI PEPSI – BUNG NHẠC CỰC CHẤT</Text>
                        <Text style={styles.titleSecond}>(Diễn ra từ ngày 13/05/2022 đến hết ngày 09/06/2022)</Text>
                    </View>
                    <View style={styles.paragraph2}>
                        <Text style={styles.titleFirst}>1. Đối tượng tham gia:</Text>
                        <Text style={styles.title3rd}>
                            {getHighlightedText(text, boldTexts)}
                        </Text>
                    </View>
                    <View style={styles.paragraph2}>
                        <Text style={styles.titleFirst}>2. Nội dung và thể lệ chi tiết chương trình:</Text>
                        <Text style={styles.titleSecond_1}>2.1 Cách thức tham gia chương trình:</Text>
                        <View style={{ marginLeft: Dimensions.get('window').width * 0.06 }}>
                            <Text style={styles.title3rd}>
                                Người chơi tham gia chương trình bằng cách thực hiện theo các bước dưới đây:
                            </Text>
                            <Text style={[styles.title3rd, { marginTop: Dimensions.get('window').height * 0.03 }]}>
                                {getHighlightedText2(boldText2, boldTexts2)}
                                {getHighlightedText3(boldText3, boldTexts3)}
                            </Text>
                            <Text style={[styles.title3rd, { marginTop: Dimensions.get('window').height * 0.03 }]}>
                                {getHighlightedText4(boldText4, boldTexts4)}
                                {getHighlightedText5(boldText5, boldTexts5)}
                            </Text>
                            <Text style={[styles.title3rd, { marginTop: Dimensions.get('window').height * 0.03 }]}>
                                {getHighlightedText6(boldText6, boldTexts6)}
                                {getHighlightedText7(boldText7, boldTexts7)}
                            </Text>
                            <Text style={[styles.title3rd, { marginTop: Dimensions.get('window').height * 0.03 }]}>
                                {getHighlightedText8(boldText8, boldTexts8)}
                                {getHighlightedText9(boldText9, boldTexts9)}
                            </Text>
                        </View>
                        <Text style={[styles.titleSecond_1, { marginTop: Dimensions.get('window').height * 0.03 }]}>2.2 Những quy định về chương trình:</Text>
                        <View style={{ marginLeft: Dimensions.get('window').width * 0.06 }}>
                            <Text style={styles.title3rd}>- Quà tặng chỉ được trao bằng hiện vật, không có giá trị quy đổi thành tiền mặt.</Text>
                            <Text style={styles.title3rd}>- Do số lượng quà tặng có giới hạn, SPVB có quyền thay đổi quà tặng (về kích thước, màu sắc, sản phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã cam kết.</Text>
                        </View>
                        <Text style={[styles.titleSecond_1, { marginTop: Dimensions.get('window').height * 0.03 }]}>2.3 Số lượng quà tặng:</Text>
                        <View style={{ marginLeft: Dimensions.get('window').width * 0.06 }}>
                            <Text style={styles.title3rd}>Số lượng quà tặng và điểm Pepsi cần thiết để quy đổi được quy định chi tiết theo bảng dưới đây:</Text>
                        </View>
                    </View>
                    <View style={styles.frame}>
                        <Image source={LOA} style={styles.imgLoa} />
                    </View>
                    <View style={styles.paragraph2}>
                        <Text style={[styles.titleFirst]}>Loa Marshall Pepsi</Text>
                        <Text style={[styles.titleSecond]}>
                            {getHighlightedText10(boldText10, boldTexts10)}
                        </Text>
                    </View>
                    <View style={styles.paragraph2}>
                        <Text style={styles.titleSecond_1}>2.4 Cách thức nhận quà tặng:</Text>
                        <View style={{ marginLeft: Dimensions.get('window').width * 0.06 }}>
                            <Text style={styles.title3rd}>- Người thắng cuộc mỗi tuần cần cung cấp thông tin cá nhân cho SPVB theo hướng dẫn trong vòng 7 ngày kể từ ngày đổi quà để được hướng dẫn nhận quà tặng. Việc người chơi cung cấp thông tin cá nhân cho SPVB theo mục đích này được hiểu là hành động cho phép SPVB thu thập và sử dụng thông tin cá nhân của người chơi theo mục địch đã nêu. Trong mọi trường hợp, việc người chơi gửi thông tin nhận quà sau thời gian quy định là không hợp lệ, và được xem là người chơi từ bỏ việc nhận quà.</Text>
                            <Text style={styles.title3rd}>- Quà tặng sẽ được vận chuyển đến địa chỉ mà người chơi đã cung cấp trong vòng 30 ngày kể từ ngày kết thúc chương trình. Trong trường hợp bất khả kháng như thiên tai, dịch bệnh, việc vận chuyển có thể bị ảnh hưởng và thời gian trao quà sẽ kéo dài hơn so với thời hạn đã cam kết nêu trên. SPVB sẽ không chịu trách nhiệm nếu thông tin nhận quà mà người chơi cung cấp không chính xác. Người chơi có trách nhiệm ký tên trên phiếu giao hàng, biên bản bàn giao quà tặng, vận đơn bưu điện hoặc một tài liệu có tên gọi khác nhằm xác định đã nhận quà từ chương trình.</Text>
                            <Text style={styles.title3rd}>- Mỗi tài khoản facebook chỉ được thắng giải duy nhất 1 lần trong toàn cuộc thi.</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph2}>
                        <Text style={styles.titleFirst}>3. Quy định chung:</Text>
                        <View style={{ marginLeft: Dimensions.get('window').width * 0.06 }}>
                            <Text style={styles.title3rd}>
                                {getHighlightedText11(boldText11, boldTexts11)}
                            </Text>
                            <Text style={styles.title3rd}>
                                {getHighlightedText12(boldText12, boldTexts12)}
                            </Text>
                            <Text style={styles.title3rd}>­- SPVB cam kết thực hiện đúng và hoàn toàn chịu trách nhiệm về chương trình trên theo các qui định của pháp luật hiện hành.</Text>
                            <Text style={styles.title3rd}>- Theo qui định của pháp luật, SPVB có quyền chấm dứt hoặc huỷ chương trình này trong trường hợp bất khả kháng và sẽ thông báo công khai phù hợp với quy định pháp luật.</Text>
                            <Text style={styles.title3rd}>- Nếu phát hiện có dấu hiệu gian lận, sử dụng công cụ, phần mềm hỗ trợ, tài khoản của người chơi sẽ bị khóa đến hết thời gian diễn ra chương trình, mọi quà tặng sẽ bị thu hồi.</Text>
                            <Text style={styles.title3rd}>-­ Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi hoặc truy cập Nền tảng, bạn xác nhận và đồng ý rằng bạn chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính sách bảo mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Background>
    )
}

export default Rules

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header_1: {
        marginTop: Dimensions.get('window').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    paragraph1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width * 1,
        marginTop: Dimensions.get('window').height * 0.03,
    },
    titleFirst: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    titleSecond: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    paragraph2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width * 0.9,
        marginTop: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').width * 0.06,
    },
    title3rd: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    titleSecond_1: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: '600',
        fontStyle: 'italic',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    frame: {
        borderRadius: 20,
        marginTop: Dimensions.get('window').height * 0.03,
        backgroundColor: Colors.DARK_BLUE,
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.06,
        alignItems: 'center',
        paddingVertical: Dimensions.get('window').width * 0.06,
        zIndex: 1,
        blurRadius: 4,
    },
    imgLoa: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.2,
    },
})