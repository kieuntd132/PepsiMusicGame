import { StyleSheet, Text, View, ScrollView, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TOOLBAR } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'


const Rule = () => {
    const a1 = "\"SPVB\"";
    const a2 = "\"SẢNG KHOÁI PEPSI – BUNG NHẠC CỰC CHẤT\"";
    const text = "Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội chủ nghĩa Việt Nam, và trên 14 tuổi. Nhân viên Công ty TNHH Nước giải khát Suntory PepsiCo Việt Nam (sau đây được gọi tắt là '\"SPVB\"') và các công ty, tổ chức, nhà cung cấp, đơn vị sản xuất trò chơi '\"SẢNG KHOÁI PEPSI – BUNG NHẠC CỰC CHẤT\"', các đại lý, nhà phân phối, các công ty quảng cáo, in ấn, nhà thầu, nhà cung cấp dịch vụ của SPVB và thân nhân của các đối tượng này không được tham gia chương trình này.";
    const boldAndUpperTexts = [a1, a2];
    const regex = new RegExp(`(${boldAndUpperTexts.join('|')})`, 'gi');

    const getTextWithBoldAndUpper = (text: string, boldAndUpperTexts: any) => {
        const parts = text.split(regex);
        return parts.map((part, index) => {
            const isBoldAndUpper = boldAndUpperTexts.includes(part);
            return isBoldAndUpper ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text2 = "Bước 1: Người chơi truy cập vào website";
    const boldAndUpperTexts2 = ["Bước 1"];
    const regex2 = new RegExp(`(${boldAndUpperTexts2.join('|')})`, 'gi');

    const getTextWithBoldAndUpper2 = (text2: string, boldAndUpperTexts2: any) => {
        const parts2 = text2.split(regex2);
        return parts2.map((part, index) => {
            const isBoldAndUpper2 = boldAndUpperTexts2.includes(part);
            return isBoldAndUpper2 ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text3 = "\nhttp://pepsimusic.pepsishop.vn/ và thu âm bài hát.";
    const boldAndUpperTexts3 = ["http://pepsimusic.pepsishop.vn/"];
    const regex3 = new RegExp(`(${boldAndUpperTexts3.join('|')})`, 'gi');

    const getTextWithBoldAndUpper3 = (text3: string, boldAndUpperTexts3: any) => {
        const parts3 = text3.split(regex3);
        return parts3.map((part, index) => {
            const isBoldAndUpper3 = boldAndUpperTexts3.includes(part);
            return isBoldAndUpper3 ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text4 = "Bước 2: Người chơi tải video bài hát đã tạo trên website";
    const boldAndUpperTexts4 = ["Bước 2"];
    const regex4 = new RegExp(`(${boldAndUpperTexts4.join('|')})`, 'gi');

    const getTextWithBoldAndUpper4 = (text4: string, boldAndUpperTexts4: any) => {
        const parts4 = text4.split(regex4);
        return parts4.map((part, index) => {
            const isBoldAndUpper4 = boldAndUpperTexts4.includes(part);
            return isBoldAndUpper4 ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text5 = "\nhttp://pepsimusic.pepsishop.vn/ và đăng video đó lên Facebook cá nhân công khai kèm\n#PepsiMusicGame #DaQuaPepsiOi\n#SangKhoaiPepsi #BungNhacCucChat";
    const boldAndUpperTexts5 = ["http://pepsimusic.pepsishop.vn/"];
    const regex5 = new RegExp(`(${boldAndUpperTexts5.join('|')})`, 'gi');

    const getTextWithBoldAndUpper5 = (text5: string, boldAndUpperTexts5: any) => {
        const parts5 = text5.split(regex5);
        return parts5.map((part, index) => {
            const isBoldAndUpper5 = boldAndUpperTexts5.includes(part);
            return isBoldAndUpper5 ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text6 = "Bước 3: Mỗi tuần, căn cứ vào mức độ Tương Tác của bài post có video tạo ra trên website";
    const boldAndUpperTexts6 = ["Bước 3"];
    const regex6 = new RegExp(`(${boldAndUpperTexts6.join('|')})`, 'gi');

    const getTextWithBoldAndUpper6 = (text6: string, boldAndUpperTexts6: any) => {
        const parts6 = text6.split(regex6);
        return parts6.map((part, index) => {
            const isBoldAndUpper6 = boldAndUpperTexts6.includes(part);
            return isBoldAndUpper6 ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text7 = "\nhttp://pepsimusic.pepsishop.vn/, SPVB sẽ công bố người thắng cuộc khi có nhiều lượt tương tác nhất (gồm lượt thích, bình luận và chia sẻ) vào lúc 12h00’ giờ ngày thứ 4 tuần kế tiếp trên\nhttps://www.facebook.com/Pepsivietnam trong thời gian diễn ra chương trình.";
    const boldAndUpperTexts7 = ["http://pepsimusic.pepsishop.vn/", "https://www.facebook.com/Pepsivietnam"];
    const regex7 = new RegExp(`(${boldAndUpperTexts7.join('|')})`, 'gi');

    const getTextWithBoldAndUpper7 = (text5: string, boldAndUpperTexts5: any) => {
        const parts5 = text5.split(regex7);
        return parts5.map((part, index) => {
            const isBoldAndUpper5 = boldAndUpperTexts5.includes(part);
            return isBoldAndUpper5 ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text8 = "Bước 4: Người chơi đăng bài trên trang cá nhân xong thì bình luận lại link post đó trên bài post thể lệ Pepsi fanpage";
    const boldAndUpperTexts8 = ["Bước 4"];
    const regex8 = new RegExp(`(${boldAndUpperTexts8.join('|')})`, 'gi');

    const getTextWithBoldAndUpper8 = (text6: string, boldAndUpperTexts6: any) => {
        const parts6 = text6.split(regex8);
        return parts6.map((part, index) => {
            const isBoldAndUpper6 = boldAndUpperTexts6.includes(part);
            return isBoldAndUpper6 ? (
                <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text9 = " https://www.facebook.com/Pepsivietnam";
    const boldAndUpperTexts9 = ["https://www.facebook.com/Pepsivietnam"];
    const regex9 = new RegExp(`(${boldAndUpperTexts9.join('|')})`, 'gi');

    const getTextWithBoldAndUpper9 = (text5: string, boldAndUpperTexts5: any) => {
        const parts5 = text5.split(regex9);
        return parts5.map((part, index) => {
            const isBoldAndUpper5 = boldAndUpperTexts5.includes(part);
            return isBoldAndUpper5 ? (
                <Text key={index} style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground source={BACKGROUND_TOOLBAR} style={styles.headline}>
                    <Image source={BACK} style={styles.iconBack} />
                    <Text style={styles.thele}>Thể lệ chương trình</Text>
                </ImageBackground>
                <ScrollView style={styles.scrollV}>
                    <View style={styles.para1}>
                        <Text style={styles.title1}>SẢNG KHOÁI PEPSI – BUNG NHẠC CỰC CHẤT</Text>
                        <Text style={styles.title2}>(Diễn ra từ ngày 13/05/2022 đến hết ngày 09/06/2022)</Text>
                    </View>
                    <View style={styles.para2}>
                        <Text style={styles.title1}>1. Đối tượng tham gia:</Text>
                        <Text style={styles.title3}>
                            {getTextWithBoldAndUpper(text, boldAndUpperTexts)}
                        </Text>
                    </View>
                    <View style={styles.para2}>
                        <Text style={styles.title1}>2. Nội dung và thể lệ chi tiết chương trình:</Text>
                        <Text style={styles.title2_1}>2.1 Cách thức tham gia chương trình:</Text>
                        <View style={{marginLeft:Dimensions.get('window').width * 0.06}}>
                            <Text style={styles.title3}>
                                Người chơi tham gia chương trình bằng cách thực hiện theo các bước dưới đây:
                            </Text>
                            <Text style={[styles.title3, {marginTop:Dimensions.get('window').height * 0.03}]}>
                                {getTextWithBoldAndUpper2(text2, boldAndUpperTexts2)}
                                {getTextWithBoldAndUpper3(text3, boldAndUpperTexts3)}
                            </Text>
                            <Text style={[styles.title3, {marginTop:Dimensions.get('window').height * 0.03}]}>
                                {getTextWithBoldAndUpper4(text4, boldAndUpperTexts4)}
                                {getTextWithBoldAndUpper5(text5, boldAndUpperTexts5)}
                            </Text>
                            <Text style={[styles.title3, {marginTop:Dimensions.get('window').height * 0.03}]}>
                                {getTextWithBoldAndUpper6(text6, boldAndUpperTexts6)}
                                {getTextWithBoldAndUpper7(text7, boldAndUpperTexts7)}
                            </Text>
                            <Text style={[styles.title3, {marginTop:Dimensions.get('window').height * 0.03}]}>
                                {getTextWithBoldAndUpper8(text8, boldAndUpperTexts8)}
                                {getTextWithBoldAndUpper9(text9, boldAndUpperTexts9)}
                            </Text>
                        </View>
                        <Text style={[styles.title2_1,{marginTop:Dimensions.get('window').height * 0.03}]}>2.2 Những quy định về chương trình:</Text>
                        <View style={{marginLeft:Dimensions.get('window').width * 0.06}}>
                            <Text style={styles.title3}>- Quà tặng chỉ được trao bằng hiện vật, không có giá trị quy đổi thành tiền mặt.</Text>
                            <Text style={styles.title3}>- Do số lượng quà tặng có giới hạn, SPVB có quyền thay đổi quà tặng (về kích thước, màu sắc, sản phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã cam kết.</Text>
                        </View>
                        <Text style={[styles.title2_1,{marginTop:Dimensions.get('window').height * 0.03}]}>2.3 Số lượng quà tặng:</Text>
                        <View style={{marginLeft:Dimensions.get('window').width * 0.06}}>
                            <Text style={styles.title3}>Số lượng quà tặng và điểm Pepsi cần thiết để quy đổi được quy định chi tiết theo bảng dưới đây:</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Background>
    )
}

export default Rule

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.03,
    },
    thele: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.22,
    },
    scrollV: {
        flex: 1,
        // flexDirection: 'row',
    },
    para1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width * 1,
        marginTop: Dimensions.get('window').height * 0.03,
    },
    title1: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    title2: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    para2: {
        // backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width * 0.9,
        marginTop: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').width * 0.06,
    },
    title3: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    title2_1: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: '600',
        fontStyle: 'italic',
        lineHeight: 21,
        color: Colors.WHITE,
    },
})